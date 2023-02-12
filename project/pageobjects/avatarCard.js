import BaseForm from "../../framework/baseForm.js";
import Button from "../../framework/elements/button.js";
import Checkbox from "../../framework/elements/checkbox.js";
import Label from "../../framework/elements/label.js";

export default class AvatarCard extends BaseForm {

    get pageIndicator() { return new Label("Page Indicator", "//div[@class='page-indicator']") };
    get nextBtn() { return new Button("Next Button", "//button[text()='Next']") };
    get interestsCheckbox() { return new Checkbox("Interests Checkbox", "//span[@class='checkbox__box']") }
    get interestsError() { return new Label("Interests Error", "//li[contains(@class, 'interests__error')]") };

    constructor() {
        super("Login Card", new Button("Terms and Condition Label", "//button[contains(@class,'avatar-upload-button')]"));
    }

    async getPageIndicatorNumber() {
        return this.pageIndicator.getLabelText();
    }

    getCheckboxesList() {
        return this.interestsCheckbox.getAllElements();
    }

    async checkRandomInterests() {
        const interests = await this.getCheckboxesList();
        interests.forEach(function(interest, index) {
            if (index === interests.length-1) {
                interest.click();
            }
        })

        await this.chooseInterests(interests);
        await this.nextBtn.clickElement();
    }

    async chooseInterests(interestsList) {
        const chosenInterests = await interestsList.slice(0,3).map(function() {
            return this.splice(Math.floor(Math.random() * this.length), 1)[0];
        }, interestsList.slice());

        await chosenInterests.forEach(function (interest) {
            interest.click();
        })
    }

    async getErrorMessageTextAndCSS(attr) {
        const labelColor = await this.interestsError.getCSSPropertyValue(attr);
        return {
            content: await this.interestsError.getLabelText(),
            color: labelColor.parsed.hex
        }
    }
}