'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
const treeParser_1 = require("./treeParser");
;
class Elmmet {
    constructor() {
        this._formaterPrefixString = 'tempFormaterFunc = div [] [';
        this._formaterSuffixString = ']';
    }
    getAbbreviationSource() {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No editor is active');
            return null;
        }
        let rangeToReplace = editor.selection;
        let abbr = editor.document.getText(rangeToReplace);
        if (rangeToReplace.isEmpty) {
            [rangeToReplace, abbr] = util_1.extractAbbreviation(rangeToReplace.start);
        }
        return {
            rangeToReplace,
            abbr,
        };
    }
    generateMarkup() {
        const { abbr, rangeToReplace } = this.getAbbreviationSource();
        let tree = null;
        try {
            tree = util_1.parseAbbreviation(abbr);
        }
        catch (e) {
            throw e;
        }
        this.parseAbbreviationTree(tree)
            .then(result => this.insertSnippet(result, rangeToReplace));
    }
    parseAbbreviationTree(tree) {
        if (!tree) {
            return;
        }
        const parsingResult = treeParser_1.buildComposition(tree);
        return this.formatResult(parsingResult);
    }
    formatResult(parsingResult) {
        const format = util_1.execCmd('./node_modules/.bin/elm-format --stdin', {});
        format.stdin.write(this._formaterPrefixString + parsingResult + this._formaterSuffixString);
        format.stdin.end();
        return format
            .then((value) => util_1.getPureResultFromFormaterOutput(value.stdout))
            .catch(err => {
            console.log('Got an error while was formating the code with elm-format', err);
            return parsingResult;
        });
    }
    insertSnippet(snippet, rangeToReplace) {
        if (snippet === null) {
            return;
        }
        const editor = vscode.window.activeTextEditor;
        editor.insertSnippet(new vscode.SnippetString(snippet), rangeToReplace);
    }
    dispose() {
        // empty disposing method
    }
}
exports.default = Elmmet;
//# sourceMappingURL=elmmet.js.map