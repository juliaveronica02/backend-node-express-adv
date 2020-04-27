const express = require("express");
const app = express();
const test = "Julia";
app.get("/name/test", (req, res) => res.send(`hello,I am ${test}`));

app.listen(8080, () => console.log("listening to port 8080"));
