"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function matchAttr(attribute) {
    switch (attribute) {
        case "type":
            return "type'";
        default:
            return attribute;
    }
}
function matchAttrValue(attrName, attrValue) {
    if (attrName === 'src') {
        return !attrValue
            ? `""`
            : `"${matchAttr}"`;
    }
    if (!attrValue || attrName === 'contenteditable') {
        return `True`;
    }
    if (isNaN(Number(attrValue)) === false) {
        return `${attrValue}`;
    }
    return `"${attrValue}"`;
}
function parseAttributes(attributes) {
    let parsedAttributesArray = attributes.map(attr => {
        return `${matchAttr(attr.name)} ${matchAttrValue(attr.name, attr.value)}`;
    });
    return parsedAttributesArray.length > 0
        ? ` ${parsedAttributesArray.join(", ")} `
        : '';
}
function indent(level) {
    const config = vscode.workspace.getConfiguration("editor");
    const tabSymbol = config.insertSpaces ? " ".repeat(config.tabSize) : "\t";
    let indentationString = "";
    for (let i = 0; i < level; i += 1) {
        indentationString += tabSymbol;
    }
    return indentationString;
}
function addTextContent(node, parsedChildrenString) {
    if (node.value !== null) {
        const textContent = `text "${node.value}"`;
        return parsedChildrenString.length > 0 ? textContent + '\n,' + parsedChildrenString : textContent;
    }
    return parsedChildrenString
        ? ` ${parsedChildrenString} `
        : '';
}
function buildComposition(node) {
    if (node.name === null && node.children.length > 0) {
        return node.children.map(childNode => buildComposition(childNode)).join(', ');
    }
    const attrs = parseAttributes(node.attributes);
    const children = node.children
        .map(childNode => buildComposition(childNode))
        .join('\n, ');
    const content = addTextContent(node, children);
    const nodeString = `${node.name} [${attrs}] [${content}]`;
    return nodeString;
}
exports.buildComposition = buildComposition;
//# sourceMappingURL=treeParser.js.map