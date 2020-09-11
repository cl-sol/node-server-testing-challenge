const server = require("./server");
const supertest = require("supertest");
const request = require("supertest");

describe("server.js", () => {
    it("runs", () => {
        expect(true).toBeTruthy();
    })
})

describe("get /", () => {
    it("should return status code 200", () => {
        return supertest(server)
        .get("/")
        .then((res) => {
            expect(res.status).toBe(200);
        })
    })
    it("should return json message: 'Live!'", () => {
        return supertest(server)
        .get("/")
        .then((res) => {
            expect(res.body).toEqual({message: "Live!"})
        })
    })
})