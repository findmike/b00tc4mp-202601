import { ValidationError, NotFoundError, DatabaseError, DuplicityError, CredentialsError } from './errors.js'

export const errorsHandler = (error, req, res, next) => {
    let statusCode;

    if (error instanceof ValidationError) {
        statusCode = 400;
    } else if (error instanceof NotFoundError) {
        statusCode = 404;
    } else if (error instanceof DatabaseError) {
        statusCode = 500;
    } else if (error instanceof DuplicityError) {
        statusCode = 409;
    } else if (error instanceof CredentialsError) {
        statusCode = 401;
    } else {
        console.error('Unexpected error:', error);
        statusCode = 500;
    }

    res.status(statusCode).json({
        success: false,
        message: statusCode === 500
            ? 'Internal Server Error'
            : error.message,
        error: error.constructor.name
    });
};
