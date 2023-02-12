import logger from "../../project/appUtils/logger.js";

export default class BaseElement{
    #name;
    #uniqueLocator;
    constructor(name, uniqueLocator) {
        this.#name = name;
        this.#uniqueLocator = uniqueLocator;
    }

     async getElement() {
        try {
            return $(this.#uniqueLocator);
        } catch (e) {
             logger.error(`Element ${this.#name}, CAN'T be found`);
            throw e;
        }
    }

     async getAllElements() {
         try {
             return $$(this.#uniqueLocator);
         } catch (e) {
              logger.error(`Elements ${this.#name}, CAN'T be found`);
             throw e;
         }
    }

    async isElementPresent() {
        try {
            const element = await this.getElement();
            const isPresent = await element.waitForDisplayed({
                timeoutMsg: `expected ${this.#name} to be displayed`
            });
             logger.info(`Element: ${this.#name}; expected: is displayed; actual: DISPLAYED`);
            return isPresent;
        } catch (e) {
             logger.error(`Element: ${this.#name}, expected: is displayed; actual: NOT DISPLAYED`);
            throw e;
        }
    }

    async isElementNotPresent() {
        try {
            const element = await this.getElement();
            const isNotPresent = await element.waitUntil(
                async function () {
                    return (await element.isDisplayedInViewport() === false) },
                { timeoutMsg: `expected ${this.#name} to not be visible` });
             logger.info(`Element: ${this.#name}; expected: NOT visible in viewport; actual: NOT VISIBLE`);
            return isNotPresent;
        } catch (e) {
             logger.error(`Element: ${this.#name}; expected: NOT visible in viewport; actual: VISIBLE`);
            throw e;
        }
    }

    async isElementClickable() {
        try {
            const element = await this.getElement();
            const isClickable = await element.waitForClickable({timeoutMsg: `Expected ${this.#name} to be clickable`});
             logger.info(`Element: ${this.#name}; expected: clickable; actual: CLICKABLE`);
            return isClickable;
        } catch (e) {
             logger.error(`Element: ${this.#name}; expected: clickable; actual:  NOT CLICKABLE`);
            throw e;
        }
    }

    async isElementEnabled() {
        try {
            const element = await this.getElement();
            const isEnabled = await element.waitForEnabled({ timeoutMsg: `Expected ${this.#name} to be enabled`} );
             logger.info(`Element: ${this.#name}; expected: enabled; actual: ENABLED`);
            return isEnabled;
        } catch (e) {
             logger.error(`Element: ${this.#name}; expected: enabled; actual: NOT ENABLED`);
            throw e;
        }
    }

    async clickElement() {
        try {
            await this.isElementPresent();
            await this.isElementClickable();
            const element = await this.getElement();
            await element.click();
             logger.info(`Element: ${this.#name}, clicked`);
        } catch (e) {
             logger.error(`Element: ${this.#name}, CAN'T be clicked`);
            throw e;
        }
    }

    async getCSSPropertyValue(property) {
        const elem = await this.getElement();
        return elem.getCSSProperty(property);
    }
}