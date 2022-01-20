"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const elmmet_1 = require("../elmmet");
describe("Elm formatter", () => {
    const elmmet = new elmmet_1.default();
    const expand = abbr => {
        const tree = util_1.parseAbbreviation(abbr);
        return elmmet.parseAbbreviationTree(tree);
    };
    const abbreviations = [
        'div>p',
        'div>p*3',
        'div#a>p.b*2>span',
        'div>div>div',
        'table>tr*2>td{item}*2',
        'i{a}+i{b}',
        'img[src]/+p',
        'div>img[src]/+p',
        'div>p+img[src]/',
        'div>p+img[src]/+p',
        'div>p+img[src]/*2+p',
        'div>p+img[src]/*3+p',
        'div{foo}',
        'div>{foo}',
        'div>{foo}+{bar}',
        'div>{foo}+{bar}+p',
        'div>{foo}+{bar}+p+{foo}+{bar}+p',
        'div>{foo}+p+{bar}',
        'a[contenteditable]',
        'a[contenteditable=foo]',
        'div>ul>li.item#foo',
    ];
    Promise.all(abbreviations.map(abbreviation => {
        it(abbreviation, () => expand(abbreviation).then(markup => expect(markup).toMatchSnapshot()));
    }));
});
//# sourceMappingURL=index.test.js.map