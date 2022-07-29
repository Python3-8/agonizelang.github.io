import React from "react";
import "../App.css";

const HowTo = (props) => {
    return (
        <div
            className="App-bg"
            style={{
                padding: "2rem",
                paddingBottom: "25vh",
                fontSize: "110%",
            }}
        >
            <p>
                &emsp;&emsp;<strong>Agonize</strong> is heavily inspired by
                BrainF. Like in BrainF, <strong>Agonize</strong> also has a
                value that can be incremented, decremented, outputted, and
                inputted. This value is called the point in{" "}
                <strong>Agonize</strong>, and unlike BrainF, there is only one
                point. <strong>Agonize</strong> also has loops, which are easier
                in <strong>Agonize</strong> than in BrainF.
            </p>

            <p>
                &emsp;&emsp;To increment the point, use the <code>+</code>{" "}
                operator. <code>++++++++++</code> sets the point to 10.
            </p>

            <p>
                &emsp;&emsp;To decrement the point, use the <code>-</code>{" "}
                operator. <code>---</code> sets the point to 1,114,109 (when the
                point goes below the inclusive range of 0..1,114,111 it is
                "cycled" to the last value in the range).
            </p>

            <p>
                &emsp;&emsp;To output the character with the Unicode codepoint
                of the point, use the <code>&gt;</code> command.
                <code>++++++++++&gt;</code> writes a line feed to{" "}
                <code>stdout</code>.
            </p>

            <p>
                &emsp;&emsp;To get user input from <code>stdin</code> and add
                the value of the codepoint of the character typed to the point,
                use the <code>&lt;</code> command. <code>&lt;&gt;</code> outputs
                the character that the user types.
            </p>

            <p>
                &emsp;&emsp;The syntax of loops is like so:{" "}
                <code>[OPERATIONS]*</code>. Between the two brackets, put any
                operations that you would like to perform. After the closing
                bracket, the number of asterisks represents the number of times
                the loop will execute. <code>[+++++++++++++]*****&gt;</code>{" "}
                writes the letter "A" to <code>stdout</code>.
            </p>

            <p>
                &emsp;&emsp;Comments in Agonize are easier than ever. Anything
                that is not in the defined character set of{" "}
                <code>+-[]*&lt;&gt;</code> will be regarded by the lexer as a
                comment.
            </p>

            <p>
                &emsp;&emsp;Here is a "Hello, world!" program written in
                Agonize:{" "}
                <code className="d-flex p-2" style={{ margin: 12 }}>
                    [++++++++]*********&gt;[++++]*******+&gt;+++++++&gt;&gt;+++&gt;[--------]********---&gt;[--]******&gt;[+++++++++]**********---&gt;--------&gt;+++&gt;------&gt;--------&gt;[--------]********---&gt;
                </code>
            </p>

            <p>
                &emsp;&emsp;For more information such as interpreter usage,
                visit{" "}
                <a
                    href="https://github.com/agonizelang/agonize"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    the <strong>Agonize</strong> GitHub repo
                </a>
                .
            </p>
        </div>
    );
};

export default HowTo;
