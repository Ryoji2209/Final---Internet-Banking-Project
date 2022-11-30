const express = require("express");
const helloRoute = require("./routes/test.route.js")

const app = express();
const port = 3001;

app.use('/hello', helloRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});