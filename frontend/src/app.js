import cancelPopupWindowHandler from "./UI/cancelPopupHandler"
import percentageHandler from "./UI/percentHandler"
import votingConstructorFormHandler from "./UI/votingConstructorFormHandler"
import votingListHandler from "./logic/votingListHandler"
import votingCreator from "./logic/votingCreator"
import loginHandler from "./logic/loginHandler"
import registrationHandler from "./logic/registrationHandler"


const main = () => {




    if(document.URL.includes("voting_information.html")) {
        percentageHandler()
    }
    else if(document.URL.includes("voting_constructor.html")) {
        votingConstructorFormHandler()
        cancelPopupWindowHandler()
        votingCreator()
    }
    else if(document.URL.includes("sign_out.html") || document.URL.includes("voting.html")) {
        cancelPopupWindowHandler()
    }
    else if(document.URL.includes("home.html")) {
        votingListHandler()
    }
    else if(document.URL.includes("login.html")) {
        loginHandler()
    }
    else if(document.URL.includes("register.html")) {
        registrationHandler()
    }
}


window.onload = main