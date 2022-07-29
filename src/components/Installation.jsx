import getPlatform from "../services/getPlatform";
import "../App.css";

const Installation = (props) => {
    const platform = getPlatform();
    const archiveImages = {
        darwin: "https://user-images.githubusercontent.com/66139317/181525224-e002e5d9-f007-4d04-a632-e022752fe9f6.png",
        linux: "https://user-images.githubusercontent.com/66139317/181525595-def355d3-d092-4f1a-ac4a-f79cfe2a25b2.png",
        win32: "https://user-images.githubusercontent.com/66139317/181525688-0cc37cf5-8950-4c79-a2a0-85fce86c26b7.png",
    };
    const executableImages = {
        darwin: "https://user-images.githubusercontent.com/66139317/181558063-d1ba6aad-3506-4f9f-a532-c5c36ac54ec0.png",
        linux: "https://user-images.githubusercontent.com/66139317/181570492-831b1a85-15ce-44e3-b67a-4c1ab5ccaa7a.png",
        win32: "https://user-images.githubusercontent.com/66139317/181553489-a85e8fff-c05b-4a37-8340-0458ff0c974e.png",
    };
    if (!platform) {
        return (
            <div
                className="App-bg-center"
                style={{ padding: "1rem", paddingLeft: "2rem" }}
            >
                <h1>
                    &emsp;&emsp;Sorry, your operating system doesn't seem to
                    support <strong>Agonize</strong>.
                </h1>
            </div>
        );
    }
    return (
        <div className="App-bg" style={{ padding: "1rem", fontSize: "110%" }}>
            <p>
                &emsp;&emsp;You made the right decision choosing to install{" "}
                <strong>Agonize</strong>. <strong>Agonize</strong> won't let you
                down!
            </p>

            <p>
                &emsp;&emsp;The latest release of <strong>Agonize</strong> can
                be found{" "}
                <a
                    href="https://github.com/agonizelang/agonize/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
                . You should find three archives:
            </p>

            <img
                src="https://user-images.githubusercontent.com/66139317/181524322-46bbf015-f4e0-4c77-99da-cbc28f04fa98.png"
                alt="darwin-x64.zip, linux-x64.zip, win32-x64.zip"
                style={{ borderRadius: 30, padding: "1rem" }}
            />

            <p>
                &emsp;&emsp;Click on{" "}
                <img
                    src={archiveImages[platform]}
                    alt={`${platform}-x64.zip`}
                    style={{ borderRadius: 10 }}
                />{" "}
                to download it. Upon extracting it, you will find a file:
            </p>

            <img
                src={executableImages[platform]}
                alt={`agonize${platform === "win32" ? ".exe" : ""}`}
                style={{ borderRadius: 30, padding: "1rem" }}
            />

            <p>
                &emsp;&emsp;This is the <strong>Agonize</strong> interpreter.
                Move this executable to a directory in <code>$PATH</code> and
                you should be able to run any <strong>Agonize</strong> program
                with the{" "}
                <code>agonize{platform === "win32" ? ".exe" : ""}</code> command
                in your Terminal
                {platform === "win32" ? ", Command Prompt, or PowerShell" : ""}.
            </p>
        </div>
    );
};

export default Installation;
