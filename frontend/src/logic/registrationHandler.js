import { usernameValidation, emailValidation, passwordValidation } from "./authenteficationValidation"
import { createErrorMessage, cleanErrorMessages } from "./errorMessageHandler"
const registrationHandler = () => {
    const usernameInputElement = document.querySelector(".input_username")
    const emailInputElement = document.querySelector(".input_email")
    const passwordInputElement = document.querySelector(".input_password")
    const submitButton = document.querySelector(".form__submit")

    submitButton.addEventListener("click", (event) => {
        event.preventDefault()
        cleanErrorMessages()
        if(usernameValidation(usernameInputElement.value) === false) {
            usernameInputElement.after(createErrorMessage("Username is not valid"))
        }
        if(emailValidation(emailInputElement.value) === false) {
            emailInputElement.after(createErrorMessage("Email is not valid"))
        }
        if(passwordValidation(passwordInputElement.value) === false) {
            passwordInputElement.after(createErrorMessage("Password is not valid"))
        }
        if([...document.querySelectorAll("#error")].length === 0) {
            const data = {
                username: usernameInputElement.value,
                email: emailInputElement.value,
                password: passwordInputElement
            }
            fetch("https://voting-app-7bai.onrender.com/api/users", {method: "POST", body: JSON.stringify(data)})
        }
    })
}

export default registrationHandler