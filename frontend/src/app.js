import fillPercentage from "./sub_js/UI/fillPercentage"
import getUsers from "./sub_js/logic/login"


const main = () => {
    fillPercentage()
    getUsers()
}


window.onload = main