const cancelPopupWindowHandler = () => {
    const cancelButton = document.querySelector(".header__cancel")
    const cancelPopup = document.querySelector(".cancel-popup")
    const stopButton = document.querySelector(".stop")

    cancelButton.addEventListener("click", (event) => {
        cancelPopup.removeAttribute("style")
    })
    stopButton.addEventListener("click", () => {
        cancelPopup.setAttribute("style", "display: none;")
    })
}

export default cancelPopupWindowHandler