import { assert } from "chai"

import dynamicTestData from "../data/dynamicTestData.js";
import { configData, staticTestData } from "../../framework/universalUtils/jsonUtil.js";

import browserUtil from "../../framework/universalUtils/browserUtil.js";
import homePage from "../pageobjects/homePage.js";
import registerPage from "../pageobjects/registerPage.js";

describe("User Inyerface", function() {
    let cardOrderNo;

    beforeEach("Test scenario",  async function() {
        await browserUtil.open(configData.url);
        await browserUtil.maximize();
    })

    it("shows an error when picture is not uploaded", async function() {
        assert.isTrue(await homePage.isFormOpen(), "the home page did not open");

        await homePage.clickStartLink();

        await registerPage.isFormOpen();

        cardOrderNo = staticTestData.cardsOrder.firstCardOrderNo;
        assert.include(await registerPage.loginCard.getPageIndicatorNumber(), cardOrderNo, `the ${cardOrderNo} card is not open`);

        await registerPage.loginCard.fillInLoginForm(dynamicTestData.userCredentials);

        await registerPage.avatarCard.isFormOpen();

        cardOrderNo = staticTestData.cardsOrder.secondCardOrderNo;
        assert.include(await registerPage.avatarCard.getPageIndicatorNumber(), cardOrderNo, `the ${cardOrderNo} card is not open`);

        await registerPage.avatarCard.checkRandomInterests();

        const errorMsg = await registerPage.avatarCard.getErrorMessageTextAndCSS(staticTestData.errorCSS);

        assert.includeMembers(Object.values(errorMsg), Object.values(staticTestData.expectedError), "the error is not as expected");
    })

    it("hides help form after clicking hide button", async function() {
        assert.isTrue(await homePage.isFormOpen(), "the home page did not open");

        await homePage.clickStartLink();

        await registerPage.helpForm.hideHelpForm();
        assert.isTrue(await registerPage.helpForm.isFormClosed(), "the help form did not hide");
    })

    it("closes cookies notification after accepting", async function() {
        assert.isTrue(await homePage.isFormOpen(), "the home page did not open");

        await homePage.clickStartLink();

        await registerPage.cookieForm.isFormOpen();

        await registerPage.cookieForm.acceptCookies();
        assert.isTrue(await registerPage.cookieForm.isFormClosed(), "cookie form did not close");
    })

    it(`checks if timer starts at ${staticTestData.timerStartTime}`, async function() {
        assert.isTrue(await homePage.isFormOpen(), "the home page did not open");

        await homePage.clickStartLink();
        assert.equal(await registerPage.getTimerCount(), staticTestData.timerStartTime, `the timer does not start at ${staticTestData.timerStartTime}`);
    })
})