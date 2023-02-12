
import BaseElement from "./baseElement.js";

export default class Input extends BaseElement{
    constructor(name, uniqueLocator) {
        super(name, uniqueLocator);
    }

    async inputText(string) {
        await this.isElementPresent();
        await this.isElementEnabled();
        const input = await this.getElement();
        await input.setValue(string);
    }
}

