export class ServerErrorException extends Error {
    constructor() {
        super();
        this.name = "server-error";
    }
}