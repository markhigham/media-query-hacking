"use strict";

const express = require("express");
const app = express();
const port = 8088;

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`started on http://:${port}`);
});