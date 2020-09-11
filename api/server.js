const express = require("express");
const server = express();
const Plants = require("../plants/plants-model");

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({
        message: "Live!"
    });
});

server.get("/plants", (req, res) => {
    Plants.getAll()
        .then(plants => {
            res.status(200).json(plants)
        })
        .catch(err => { res.status(500).json(err) })
})
module.exports = server;