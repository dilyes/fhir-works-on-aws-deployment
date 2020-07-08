import HttpError from './HttpError';

export default class NotFoundError extends HttpError {
    constructor(errorDetail: any) {
        // Node Error class requires passing a string message to the parent class
        super('Resource Not found', 404, errorDetail);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}