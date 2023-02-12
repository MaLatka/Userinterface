import BaseForm from "../../framework/baseForm.js";
import Label from "../../framework/elements/label.js";
import Button from "../../framework/elements/button.js";

export default class CookieForm extends BaseForm {

    get acceptCookiesBtn() { return new Button("Accept Cookies Button", "//button[contains(text(), 'Not really')]")}

    constructor() {
        super("Cookie Notification", new Label("Cookie Message Label", "//p[@class='cookies__message']"));
    }

    async acceptCookies() {
        await this.acceptCookiesBtn.clickElement();
    }
}