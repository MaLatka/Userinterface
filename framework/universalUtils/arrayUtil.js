import logger from "../../project/appUtils/logger.js";

export default class ArrayUtil {
    static getRandomItemFromArray(array) {
        let randomItem;
        try {
            const index = Math.floor(Math.random() * array.length);
            randomItem = array[index];
            logger.info(`Successfully picked a random item from array`);
        } catch(e) {
            logger.error(`Failed to pick a random item from array`);
            throw e;
        }
        return randomItem;
    }
}