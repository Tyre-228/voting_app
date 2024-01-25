import getUsers from "./logic/login"
import cancelPopupWindowHandler from "./UI/cancelPopupHandler"
import percentageHandler from "./UI/percentHandler"
import votingConstructorFormHandler from "./UI/votingConstructorFormHandler"


const main = () => {
    // getUsers()
    if(document.URL.includes("voting_information.html")) {
        percentageHandler()
    }
    else if(document.URL.includes("voting_constructor.html")) {
        votingConstructorFormHandler()
        cancelPopupWindowHandler()
    }
    else if(document.URL.includes("sign_out.html") || document.URL.includes("voting.html")) {
        cancelPopupWindowHandler()
    }
}


window.onload = main