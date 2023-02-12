import BaseForm from "../../framework/baseForm.js";
import Input from "../../framework/elements/input.js";
import Dropdown from "../../framework/elements/dropdown.js";
import Checkbox from "../../framework/elements/checkbox.js";
import Button from "../../framework/elements/button.js";
import Label from "../../framework/elements/label.js";

export default class LoginCard extends BaseForm {

    get pageIndicator() { return new Label("Page Indicator", "//div[@class='page-indicator']") };
    get inputFields() {
        return {
            passwordInput: new Input("Password Input", "//input[contains(@placeholder, 'Password')]"),
            emailInput: new Input("Email Input", "//input[contains(@placeholder, 'email')]"),
            domainInput: new Input("Domain Input", "//input[@placeholder='Domain']") }
    };
    get emailDropdown() { return new Dropdown("Email Dropdown", "//div[@class='dropdown']") };
    get termsCheckBox() { return new Checkbox("Terms & Conditions Checkbox", "//span[contains(@class, 'checkbox__check')]") };
    get nextBtn() { return new Button("Next Button", "//a[text()='Next']") };
    constructor() {
        super("Login Card", new Label("Terms & Condition Label", "//a[contains(@class,'terms-conditions')]"));
    }

    async getPageIndicatorNumber() {
        return this.pageIndicator.getLabelText();
    }

    async setInputValues(values) {
        const loginFields = this.inputFields;
        for (let i = 0; i<Object.keys(loginFields).length; i++) {
            const value = Object.values(values)[i];
            const input = Object.values(loginFields)[i]
            await input.inputText(value);
        }
        await this.emailDropdown.selectRandomTLD();
    }

    async fillInLoginForm(values) {
        await this.setInputValues(values);
        await this.termsCheckBox.clickElement();
        await this.nextBtn.clickElement();
    }
}