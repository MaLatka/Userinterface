import BaseForm from "../../framework/baseForm.js";
import Button from "../../framework/elements/button.js";
import Label from "../../framework/elements/label.js";

export default class HelpForm extends BaseForm {

    get hideBtn() { return new Button("Hide Help Form Button", "//button[contains(@class, 'send-to-bottom-button')]") };
    constructor() {
        super("Help Form", new Label("Help Form Title", "//h2[@class='help-form__title']"));
    }

    async hideHelpForm() {
        await this.hideBtn.clickElement();
    }
}