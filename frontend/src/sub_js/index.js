const DOM = class {
    getElem(selector) {
        return document.querySelector(selector)
    }
    getAllElem(selector) {
        return document.querySelectorAll(selector)
    }
    eventDelegation(elemSelector, seekElemSelector, event) {
        const eventFunction = (event) => {
            if(event.target.closest(seekElemSelector)) {
                this.getElem(elemSelector).removeEventListener(event, eventFunction)
                return true
            }
        }
        return this.getElem(elemSelector).addEventListener(event, eventFunction)
    }
}