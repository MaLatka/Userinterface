import BaseElement from "./baseElement.js";

export default class Label extends BaseElement {
    constructor(name, uniqueLocator) {
        super(name, uniqueLocator);
    }

    async getLabelText() {
        await this.isElementPresent();
        const label = await this.getElement();
        return label.getText();
    }
}