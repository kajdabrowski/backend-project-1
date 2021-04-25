class UserError extends Error { }

class InvalidBody extends UserError {
    constructor(array) { //array avser fields i Davids video. 
        super()
        this.array = array
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

module.exports = {
    UserError,
    InvalidBody,
    InvalidLogin
}  