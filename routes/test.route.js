const express = require("express");

const route = express.Router();

route.get('/', (req, res) => {
    res.json({ message: "Hello from server!" });
})

module.exports = route;