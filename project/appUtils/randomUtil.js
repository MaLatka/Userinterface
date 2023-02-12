import {configData, staticTestData} from "../../framework/universalUtils/jsonUtil.js";
import ArrayUtil from "../../framework/universalUtils/arrayUtil.js";
import logger from "./logger.js";

export default class RandomUtil{
    static generateRandomString() {
        let randomStr;
        try {
            randomStr = Math.random().toString(configData.randomConfig.radix).slice(configData.randomConfig.indexStart);
            logger.info(`Succssefully generated a random string: ${randomStr}`);
        } catch (e) {
            logger.error(`Failed to generate random string`);
            throw e;
        }
        return randomStr;
    }

    static getRandomDomain() {
        let randomDomain;
        try {
            const domainList = staticTestData.domainList;
            randomDomain = ArrayUtil.getRandomItemFromArray(domainList);
            logger.info(`Successfully generated a random domain: ${randomDomain}`);
        } catch(e) {
            logger.error(`Failed to generate random domain`);
            throw e;
        }
        return randomDomain;
    }
}