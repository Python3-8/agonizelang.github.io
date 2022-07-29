const ops = ["+", "-", "[", "]", "*", ">", "<"];

export class Types {
    static op = 0;
    static comment = 1;
}

export class Token {
    constructor(type, string) {
        this.type = type;
        this.string = string;
    }
}

export default class Lexer {
    constructor(code) {
        this.code = code;
    }

    tokenize() {
        const tokens = [];
        for (let char of this.code) {
            if (ops.includes(char)) {
                tokens.push(new Token(Types.op, char));
            } else {
                tokens.push(new Token(Types.comment, char));
            }
        }
        return tokens;
    }
}
