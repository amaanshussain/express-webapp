const { Router } = require("express");

const dogs = Router();

dogs.get("/random", async (req, res) => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json())
    const url = response.message;
    res.send({ image: url });
})

module.exports = { dogs }