import { createErrorMessage, cleanErrorMessages } from "./errorMessageHandler"

const votingCreator = () => {
    const titleInput = document.querySelector("#voting-title")
    const optionInputList = [...document.querySelectorAll("#option-input")]
    const createVotingButton = document.querySelector(".voting__submit")

    createVotingButton.addEventListener("click", event => {
        event.preventDefault()
        cleanErrorMessages()
        if(titleInput.value === "") {
            createVotingButton.after(createErrorMessage("Add title"))
        }
    })

    

}

export default votingCreator