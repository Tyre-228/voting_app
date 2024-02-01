const votingListHandler = async () => {
    fetch("https://voting-app-7bai.onrender.com/api/votings").then(res => res.json())
    .then(data => {
        const votingsContainer = document.querySelector(".main__voting-list")
        for(const voting of data) {
            const votingElem = document.createElement("li")
            votingElem.className = "voting-list__item voting"
            votingElem.innerHTML = `
            <h3 class="voting__title">${voting.name}</h3>
            <p class="voting__stats">${voting.participators.length} people voted</p>
            <button class="voting__more"><a href="./voting_information.html">open</a></button>`
            votingsContainer.append(votingElem)
        }
    })
}

export default votingListHandler