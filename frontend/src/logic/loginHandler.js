import { emailValidation, passwordValidation } from "./authenteficationValidation"
import { createErrorMessage, cleanErrorMessages } from "./errorMessageHandler"
const loginHandler = () => {
    const emailInputElement = document.querySelector(".input_email")
    const passwordInputElement = document.querySelector(".input_password")
    const submitButton = document.querySelector(".form__submit")

    submitButton.addEventListener("click", (event) => {
        event.preventDefault()
        cleanErrorMessages()
        if(emailValidation(emailInputElement.value) === false) {
            emailInputElement.after(createErrorMessage("Email is not valid"))
        }
        if(passwordValidation(passwordInputElement.value) === false) {
            passwordInputElement.after(createErrorMessage("Password is not valid"))
        }
    })
}

export default loginHandler