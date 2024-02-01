export const usernameValidation = (username) => {
    if(username.length < 2) {
        return false
    }
    else if(username.length > 64) {
        return false
    }
    return true
}
export const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(email.length < 2) {
        return false
    }
    else if(email.length > 64) {
        return false
    }
    else if(emailRegex.test(email) === false) {
        return false
    }
    return true
}
export const passwordValidation = (password) => {
    if(password.length < 2) {
        return false
    }
    else if(password.length > 64) {
        return false
    }
    return true
}