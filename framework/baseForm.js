
export default class BaseForm{
    #name;
    #uniqueElement;
    constructor(name, uniqueElement) {
        this.#name = name;
        this.#uniqueElement = uniqueElement;
    }

    async isFormOpen() {
        return this.#uniqueElement.isElementPresent();
    }

    async isFormClosed() {
        return this.#uniqueElement.isElementNotPresent();
    }
}