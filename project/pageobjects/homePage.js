import BaseForm from "../../framework/baseForm.js";
import Button from "../../framework/elements/button.js";

class HomePage extends BaseForm {
    get startLink() { return new Button("Start Link", "//a[@class='start__link']") };
    constructor() {
        super("Home Page", new Button("Start Button", "//button[@class='start__button']"));
    }

    async clickStartLink() {
        await this.startLink.clickElement();
    }
}

export default new HomePage();