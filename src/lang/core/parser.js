import { Types } from "./lexer";

const ops = ["-", "+"];
const io = ["<", ">"];
const loop = ["[", "]"];
const multiplier = "*";

function raise(err) {
    alert(`Parsing error: ${err}`);
}

export class Ops {
    static decrement = 0;
    static increment = 1;
}

export class IoOps {
    static input = 0;
    output = 1;
}

export class Operation {
    constructor(type) {
        this.type = type;
        this.checkType = "operation";
    }
}

export class Loop {
    constructor(operations, count) {
        this.operations = operations;
        this.count = count;
        this.checkType = "loop";
    }
}

export class Io {
    constructor(type) {
        this.type = type;
        this.checkType = "io";
    }
}

export default class Parser {
    constructor(tokens) {
        this.tokens = tokens;
    }

    parse() {
        const elements = [];
        let inLoop = false;
        let expecting = [null, true];
        let loopElements = [];
        let loopCount = 0;

        for (let token of this.tokens) {
            if (token.type === Types.op) {
                if (expecting[0] === null) {
                    if (ops.includes(token.string)) {
                        (inLoop ? loopElements : elements).push(
                            new Operation(
                                token.string === ops[0]
                                    ? Ops.decrement
                                    : Ops.increment
                            )
                        );
                    } else if (io.includes(token.string)) {
                        (inLoop ? loopElements : elements).push(
                            new Io(
                                token.string === io[0]
                                    ? IoOps.input
                                    : IoOps.output
                            )
                        );
                    } else if (token.string === multiplier) {
                        raise(`expected a loop before "${multiplier}"`);
                        return false;
                    } else if (loop.includes(token.string)) {
                        if (token.string === loop[0]) {
                            if (inLoop) {
                                raise("nested loops not allowed");
                                return false;
                            } else {
                                inLoop = true;
                            }
                        } else {
                            if (inLoop) {
                                inLoop = false;
                                expecting = [multiplier, false];
                            } else {
                                raise(
                                    `unexpected "${loop[1]}" with no open loop`
                                );
                                return false;
                            }
                        }
                    }
                } else {
                    if (expecting[1]) {
                        if (token.string === multiplier) {
                            loopCount++;
                        } else {
                            elements.push(new Loop(loopElements, loopCount));
                            loopElements = [];
                            loopCount = 0;
                            expecting = [null, true];
                            if (ops.includes(token.string)) {
                                elements.push(
                                    new Operation(
                                        token.string === ops[0]
                                            ? Ops.decrement
                                            : Ops.increment
                                    )
                                );
                            } else if (io.includes(token.string)) {
                                elements.push(
                                    new Io(
                                        token.string === io[0]
                                            ? IoOps.input
                                            : IoOps.output
                                    )
                                );
                            } else if (loop.includes(token.string)) {
                                if (token.string === loop[0]) {
                                    inLoop = true;
                                } else {
                                    raise(
                                        `unexpected "${loop[1]}" with no open loop`
                                    );
                                    return false;
                                }
                            }
                        }
                    } else {
                        if (token.string === multiplier) {
                            loopCount++;
                            expecting[1] = true;
                        } else {
                            raise(
                                `expected at least one "${multiplier}" after loop`
                            );
                            return false;
                        }
                    }
                }
            }
        }
        return elements;
    }
}
