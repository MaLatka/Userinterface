import BaseForm from "../../framework/baseForm.js";
import Label from "../../framework/elements/label.js";
import LoginCard from "./loginCard.js";
import AvatarCard from "./avatarCard.js";
import HelpForm from "./helpForm.js";
import CookieForm from "./cookieForm.js";
import Button from "../../framework/elements/button.js";

class RegisterPage extends BaseForm {
    get loginCard() { return new LoginCard()};
    get avatarCard() { return new AvatarCard()};
    get helpForm() { return new HelpForm() };
    get cookieForm() { return new CookieForm() };
    get mainTimer() { return new Label("Main Page Timer", "//div[contains(@class, 'timer')]") };
    constructor() {
        super("Register Page", new Button("Pagination Button", "//button[@class='pagination__button']"));
    }

    async getTimerCount() {
        return this.mainTimer.getLabelText();
    }
}

export default new RegisterPage();