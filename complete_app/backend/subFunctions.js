const userJSONValidator = (userData={}) => {
    if(typeof userData !== "object") {
        return false
    }
    else if(Object.keys(userData).length !== 3) {
        return false
    }
    else {
        const objectKeysReference = ['name', 'email', 'password']
        const objectKeys = Object.keys(userData)
        for(let i = 0;i < objectKeys.length;i++) {
            if(objectKeys[i] !== objectKeysReference[i]) {
                return false
            }
        }
        if(typeof userData["name"] !== 'string') {
            return false
        }
        else if(typeof userData["email"] !== 'string') {
            return false
        }
        else if(typeof userData["password"] !== 'string') {
            return false
        }
        else {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if(!emailRegex.test(userData["email"])) {
                return false
            }
        }
        return true
    }
}


const votingJSONValidator = votingData => {
    if(typeof votingData !== "object") {
        return false
    }
    else if(Object.keys(votingData).length !== 4) {
        return false
    }
    else {
        const objectKeysReference = ['name', 'options', 'creator_id', 'participators']
        const objectKeys = Object.keys(votingData)
        for(let i = 0;i < objectKeys.length;i++) {
            if(objectKeys[i] !== objectKeysReference[i]) {
                return false
            }
        }
        if(typeof votingData["name"] !== "string") {
            return false
        }
        else if(typeof votingData["options"] !== "object") {
            return false
        }
        else if(typeof votingData["creator_id"] !== "string") {
            return false
        }
        else if(typeof votingData["participators"] !== "object") {
            return false
        }
        else {
            return true
        }
    }
}






module.exports = {
    userJSONValidator: userJSONValidator,
    votingJSONValidator: votingJSONValidator
}