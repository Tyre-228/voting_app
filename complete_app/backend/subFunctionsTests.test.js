const { userJSONValidator, votingJSONValidator } = require("./subFunctions")



describe("userJSONValidator test", () => {
    it("should return false", () => {
        expect(userJSONValidator("fds")).toBe(false)
        expect(userJSONValidator(true)).toBe(false)
        expect(userJSONValidator(21)).toBe(false)
        expect(userJSONValidator([])).toBe(false)
        expect(userJSONValidator({})).toBe(false)
        expect(userJSONValidator({
            "haram": false,
            "halal": true
        })).toBe(false)
        expect(userJSONValidator({
            "name": 123,
            "surname": "fdskj",
            "email": "fdsiaj"
        })).toBe(false)
        expect(userJSONValidator({
            "name": 123,
            "email": "dfsji",
            "password": false
        })).toBe(false)
        expect(userJSONValidator({
            "name": "fds",
            "email": 123,
            "password": "fsda"
        })).toBe(false)
        expect(userJSONValidator({
            "name": "fdjsk",
            "email": "salamaleykum",
            "password": "fdsjkla"
        })).toBe(false)
        expect(userJSONValidator({
            "name": "fdjsk",
            "email": "salamaleykum.com",
            "password": "fdsjkla"
        })).toBe(false)
        expect(userJSONValidator({
            "name": "fdjsk",
            "email": "salamaleykum@com",
            "password": "fdsjkla"
        })).toBe(false)
    })
    it("should return true", () => {
        const data = {
            name: "Stepan",
            email: "stepan21bandera@gmail.com",
            password: "MoskvaGorit3310"
        }
        expect(userJSONValidator(data)).toBe(true)
    })
})



describe("votingJSONValidator test", () => {
    it("should return false", () => {
        expect(votingJSONValidator()).toBe(false)
    })
    it("should return true", () => {
        expect(votingJSONValidator({
            name: "Voting",
            options: ["Yes", "No"],
            creator_id: "ObjectId('659f130295148b52a99f81b3')",
            participators: ["ObjectId('659f130295148b52a99f81b3')", "ObjectId('659f130295148b52a99f81b3')", "ObjectId('659f130295148b52a99f81b3')"]
        })).toBe(true)
    })
})