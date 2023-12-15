const fillPercentage = () => {
    const lines = [...document.querySelectorAll(".percentage__visual")]
    lines.forEach(line => {
        const width = line.getAttribute("data-percentage")
        line.style.setProperty("--width", width)
    })
}


const main = () => {
    fillPercentage()
}


window.onload = main