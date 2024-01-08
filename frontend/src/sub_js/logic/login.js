const getUsers = () => {
    const users = fetch("/api/users").then(res => {
        console.log(res)
        return res.body
    }).then(data => {
        console.log(data)
    })
}

export default getUsers