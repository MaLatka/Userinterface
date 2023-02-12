import { createLogger, format, transports } from "winston";

class Logger {
    constructor() {
        this.options = {
            level: "info",
            transports: [
                new transports.File({
                    filename: 'combined.log',
                    level: 'info',
                    format: format.combine(format.timestamp(), format.json())
                }),
                new transports.File({
                    filename: 'combined.error.log',
                    level: 'error',
                    format: format.combine(format.timestamp(), format.json())
                })
            ]
        }
        this.logger = createLogger(this.options);
    }

    info(message) {
        this.logger.log("info", message);
    }

    error(message) {
        this.logger.log("error", message);
    }
}

export default new Logger();