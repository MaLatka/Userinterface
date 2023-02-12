import logger from "../../project/appUtils/logger.js";

class BrowserUtil {
     async open(path) {
         try {
             await browser.url(path);
              logger.info(`Successfully NAVIGATED to ${path}`);
         } catch(e) {
              logger.error(`CAN'T navigate to ${path}`);
             throw e;
         }
    }

    async maximize() {
         try {
             await browser.maximizeWindow();
              logger.info(`Successfully MAXIMIZED browser window`);
         } catch (e) {
              logger.error(`CAN'T maximize browser window`);
         }
    }
}

export default new BrowserUtil();