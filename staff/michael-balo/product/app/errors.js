export class ValidationError extends Error {
    constructor(message, options) {
        super(message, options)
        this.name = 'ValidationError'
    }
} // error 400

export class NotFoundError extends Error {
    constructor(message, options) {
        super(message, options)
        this.name = 'NotFoundError'
    }
} // error 404

export class DatabaseError extends Error {
    constructor(message, options) {
        super(message, options)
        this.name = 'DatabaseError'
    }
} // error 500

export class DuplicityError extends Error {
    constructor(message, options) {
        super(message, options)
        this.name = 'DuplicityError'
    }
} // error 409

export class CredentialsError extends Error {
    constructor(message, options) {
        super(message, options)
        this.name = 'CredentialsError'
    } // 401
}
