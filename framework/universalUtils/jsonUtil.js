import * as fs from "fs";
import logger from "../../project/appUtils/logger.js";

export class JsonUtil{
    static readJsonFile(filePath) {
        let jsonData = fs.readFileSync(filePath, (err) => {
            if (err) {
                 logger.error(`Can't read json file: ${filePath}`);
                throw err;
            } else {
                 logger.info(`Read json file successfully!`);
            }
        });
        return JSON.parse(jsonData);
    }
}

export const configData = JsonUtil.readJsonFile("project/configData.json");
export const staticTestData = JsonUtil.readJsonFile(configData.paths.testDataFilePath);