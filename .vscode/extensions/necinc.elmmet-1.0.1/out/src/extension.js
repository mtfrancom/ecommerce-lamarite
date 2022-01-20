'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const elmmet_1 = require("./elmmet");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "elmmet" is now active!');
    const elmmet = new elmmet_1.default();
    let disposable = vscode.commands.registerCommand('extension.expandAbbreviation', () => {
        elmmet.generateMarkup();
    });
    context.subscriptions.push(elmmet);
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map