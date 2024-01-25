const getUsers = () => {
    fetch("https://voting-app-7bai.onrender.com/api/users", {method: "GET", mode: "no-cors"})
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        // console.log(data)
    })
}

export default getUsers