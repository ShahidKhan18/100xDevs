class AppError extends Error{
    constructor(message,statusCode,explanation){
        super(message);
        this.statusCode = statusCode || 500;
        this.explanation = explanation;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true; // Operational error, trusted error
        Error.captureStackTrace(this, this.constructor); // Capture stack trace
    }
}

module.exports = AppError;