import { Ops, IoOps } from "./core/parser";
import _ from "lodash";

export default class Interpreter {
    constructor(elements, addToOutput) {
        this.elements = elements;
        this.addToOutput = addToOutput;
        this.point = 0;
    }

    execute() {
        for (let element of this.elements) {
            console.log(element);
            if (element.checkType === "loop") {
                for (let i = 0; i < element.count; i++) {
                    for (let operation of element.operations) {
                        this.performNormalOperation(operation);
                    }
                }
            } else {
                this.performNormalOperation(element);
            }
        }
    }

    performNormalOperation(element) {
        if (element.checkType === "operation") {
            if (element.type === Ops.increment) {
                this.point++;
                if (this.point === 0x110000) {
                    this.point = 0;
                }
            } else {
                this.point--;
                if (this.point === -1) {
                    this.point += 0x110000;
                }
            }
        } else if (element.checkType === "io") {
            if (element.type === IoOps.input) {
                let char = "";
                while (true) {
                    char = prompt("Program is requesting one-character input");
                    if (char && _.toArray(char).length === 1) break;
                }
                this.point += char.codePointAt(0);
            } else {
                this.addToOutput(String.fromCodePoint(this.point));
            }
        }
    }
}
