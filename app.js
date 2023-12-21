const express = require('express');
const cors = require('cors')
const { dogs } = require('./routes/dogs');

const app = express();
const PORT = 3000;
app.use(cors());

const visitMiddlware = (req, res, next) => {
    console.log(req.path);
    next();
}
app.use(visitMiddlware)

app.use("/dogs", dogs)

app.get("/", (req, res) => {
    res.send({ response: "Hello World!" });
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})