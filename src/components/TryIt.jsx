import { useState } from "react";
import Lexer from "../lang/core/lexer";
import Parser from "../lang/core/parser";
import Interpreter from "../lang/interpreter";
import "../App.css";

const TryIt = (props) => {
    const defaultCode =
        "[++++++++]*********>[++++]*******+>+++++++>>+++>[--------]********--->[--]******>[+++++++++]**********--->-------->+++>------>-------->[--------]********--->";
    const [code, setCode] = useState(defaultCode);
    const runCode = () => {
        const outputEl = document.getElementById("output");
        outputEl.innerText = "";
        let output = "";
        const addToOutput = (char) => (output += char);
        const lexer = new Lexer(code);
        const tokens = lexer.tokenize();
        const parser = new Parser(tokens);
        const elements = parser.parse();
        if (!elements) return;
        const interpreter = new Interpreter(elements, addToOutput);
        interpreter.execute();
        outputEl.innerText = output;
    };
    return (
        <div
            className="App-bg"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <button className="btn btn-primary border m-1" onClick={runCode}>
                Run
            </button>
            <div
                style={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "center",
                    flex: 1,
                }}
            >
                <textarea
                    style={{
                        width: "100%",
                        border: "2px solid gold",
                        marginRight: 1,
                        backgroundColor: "#333",
                        color: "yellow",
                    }}
                    defaultValue={defaultCode}
                    onChange={(e) => setCode(e.target.value)}
                />
                <div
                    id="output"
                    style={{
                        width: "100%",
                        border: "2px solid gold",
                        padding: 8,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default TryIt;
