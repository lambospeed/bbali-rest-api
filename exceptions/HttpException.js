class HttpException {
    constructor(message, status = 400) {
        this.message = message;
        this.status = status;
    }
}

module.exports = HttpException;
