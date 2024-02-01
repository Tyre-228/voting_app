export const createErrorMessage = (message) => {
    const errorMessage = document.createElement("div")
    errorMessage.id = "error"
    errorMessage.innerHTML = message
    return errorMessage
}
export const cleanErrorMessages = () => {
    const errorMessages = [...document.querySelectorAll("#error")]
    errorMessages.forEach(errorMessage => {
        errorMessage.outerHTML = ""
    })
}