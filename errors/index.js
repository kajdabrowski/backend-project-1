class UserError extends Error { }

class InvalidBody extends UserError {
    constructor() { 
        super()
        this.message = 'Invalid body'
        this.errorCode = 400
    }
}

class InvalidLogin extends UserError{
    constructor(){
        super()
        this.message = 'Invalid login credentials'
        this.errorCode = 401
    }
}

class ModelError extends UserError{
    constructor(){
        super()
        this.message = 'Error with DB'
        this.errorCode = 403
    }
}


module.exports = {
    UserError,
    InvalidBody,
    InvalidLogin,
    ModelError
}  