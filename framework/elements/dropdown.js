import BaseElement from "./baseElement.js";
import Button from "./button.js";
import Label from "./label.js";
import ArrayUtil from "../universalUtils/arrayUtil.js";

export default class Dropdown extends BaseElement{
    get extendBtn() { return new Button("Dropdown Extend Button", "//div[@class='dropdown__opener']") };
    get listMenuItem() { return new Label("Dropdown List Item", "//div[@class='dropdown__list-item']") };
    constructor(name, uniqueLocator) {
        super(name, uniqueLocator);
    }

    async selectRandomTLD() {
        await this.extendBtn.clickElement();
        const listItems = await this.listMenuItem.getAllElements();
        const tld = ArrayUtil.getRandomItemFromArray(listItems);
        await tld.click();
    }
}