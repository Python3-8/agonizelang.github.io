import React from "react";
import "../App.css";

const Home = (props) => {
    return (
        <>
            <div className="App-header">
                <h1>Agonize: The best programming language there is</h1>
                <hr />
                <p style={{ fontSize: "120%", padding: "2rem" }}>
                    &emsp;&emsp;<strong>Agonize</strong> is an esoteric
                    programming language that ships with insane features such as
                    I/O operations, and in a way simple arithmetic calculations
                    such as addition and subtraction. <strong>Agonize</strong>{" "}
                    is an interpreted language whose interpreter was built with
                    Google's Dart. Agonize is completely open source with pride.
                </p>
            </div>
        </>
    );
};

export default Home;
