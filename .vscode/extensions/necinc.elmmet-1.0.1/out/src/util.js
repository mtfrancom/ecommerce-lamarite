"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const cp = require("child_process");
const extract = require("@emmetio/extract-abbreviation");
const abbreviationParser = require("@emmetio/abbreviation");
function extractAbbreviation(position) {
    let editor = vscode.window.activeTextEditor;
    let currentLine = editor.document.lineAt(position.line).text;
    let result = extract(currentLine, position.character, true);
    if (!result) {
        return [null, ""];
    }
    let rangeToReplace = new vscode.Range(position.line, result.location, position.line, result.location + result.abbreviation.length);
    return [rangeToReplace, result.abbreviation];
}
exports.extractAbbreviation = extractAbbreviation;
function parseAbbreviation(abbr) {
    let result = null;
    try {
        result = abbreviationParser(abbr);
    }
    catch (e) {
        throw new Error(`Tree parsing error: ${e.message}`);
    }
    return result;
}
exports.parseAbbreviation = parseAbbreviation;
exports.isWindows = process.platform === "win32";
/** Executes a command. Shows an error message if the command isn't found */
function execCmd(cmd, options = {}) {
    const { fileName, onStart, onStdout, onStderr, onExit, cmdArguments } = options;
    let childProcess, firstResponse = true, wasKilledbyUs = false;
    const executingCmd = new Promise((resolve, reject) => {
        let cmdArguments = options ? options.cmdArguments : [];
        childProcess = cp.exec(cmd + " " + (cmdArguments || []).join(" "), {}, handleExit);
        childProcess.stdout.on("data", (data) => {
            if (firstResponse && onStart) {
                onStart();
            }
            firstResponse = false;
            if (onStdout) {
                onStdout(data.toString());
            }
        });
        childProcess.stderr.on("data", (data) => {
            if (firstResponse && onStart) {
                onStart();
            }
            firstResponse = false;
            if (onStderr) {
                onStderr(data.toString());
            }
        });
        function handleExit(err, stdout, stderr) {
            executingCmd.isRunning = false;
            if (onExit) {
                onExit();
            }
            if (!wasKilledbyUs) {
                if (err) {
                    if (options.showMessageOnError) {
                        const cmdName = cmd.split(" ", 1)[0];
                        const cmdWasNotFound = 
                        // Windows method apparently still works on non-English systems
                        (exports.isWindows &&
                            err.message.includes(`'${cmdName}' is not recognized`)) ||
                            (!exports.isWindows && err.code === 127);
                        if (cmdWasNotFound) {
                            let notFoundText = options ? options.notFoundText : "";
                            vscode.window.showErrorMessage(`${cmdName} is not available in your path. ` + notFoundText);
                        }
                        else {
                            vscode.window.showErrorMessage(err.message);
                        }
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    resolve({ stdout: stdout, stderr: stderr });
                }
            }
        }
    });
    executingCmd.stdin = childProcess.stdin;
    executingCmd.kill = killProcess;
    executingCmd.isRunning = true;
    return executingCmd;
    function killProcess() {
        wasKilledbyUs = true;
        if (exports.isWindows) {
            cp.spawn("taskkill", ["/pid", childProcess.pid.toString(), "/f", "/t"]);
        }
        else {
            childProcess.kill("SIGINT");
        }
    }
}
exports.execCmd = execCmd;
function getGroupMatch(str, matcher, groupIndex) {
    const matches = matcher.exec(str);
    if (!matches || !matches[groupIndex]) {
        throw new Error('Matches not found');
    }
    return matches[groupIndex];
}
function getIndentationLevel(output) {
    const matcher = /^tempFormaterFunc \=\n?\s*div \[\]\n?([\s\S]*)\s*\]/m;
    const res = getGroupMatch(output, matcher, 1);
    const firstLine = res.split('\n')[0];
    return firstLine.length - firstLine.trim().length;
}
function unindentResultString(result, unindentForNumber) {
    const parts = result.split('\n');
    return parts
        .map(line => new RegExp(`^\\s{${unindentForNumber}}`).test(line)
        ? line.slice(unindentForNumber)
        : line)
        .join('\n');
}
function getPureResultFromFormaterOutput(output) {
    const matcher = /^tempFormaterFunc \=\n?\s*div \[\]\n?\s*\[\s*([\s\S]*)\s*\]/m;
    return unindentResultString(getGroupMatch(output, matcher, 1).trim(), getIndentationLevel(output));
}
exports.getPureResultFromFormaterOutput = getPureResultFromFormaterOutput;
//# sourceMappingURL=util.js.map