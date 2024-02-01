const addOptionHandler = () => {
    const addOptionButton = document.querySelector(".add-option__button")
    const addOptionContainer = document.querySelector(".add-option")

    addOptionButton.addEventListener("click", (event) => {
        event.preventDefault()
        let newOptionElem = document.createElement("li")
        newOptionElem.className = "list__item"
        newOptionElem.innerHTML = `
        <button class="delete-item"><a href="./home.html"><span class="material-symbols-outlined">close</span></a></button>
        <label class="voting_label" for="yes">
            <input type="text" placeholder="option" id="option-input">
        </label>
        `
        addOptionContainer.before(newOptionElem)
    })
}

const deleteOptionHandler = () => {
    const optionList = document.querySelector(".option_list")

    optionList.addEventListener("click", (event) => {
        if(event.target.closest(".delete-item")) {
            event.preventDefault()
            const optionElements = [...document.querySelectorAll(".list__item")]
            if(optionElements.length > 1) {
                const optionToDelete = event.target.closest(".list__item")
                optionToDelete.outerHTML = ""
            }
        }
    })
}

const votingConstructorFormHandler = () => {
    addOptionHandler()
    deleteOptionHandler()
}

export default votingConstructorFormHandler