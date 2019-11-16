// server.js
const express = require("express");
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
 res.send("Hello from Node.js app \n");
});
app.listen(PORT, function() {
 console.log(`Listening on ${PORT}`);
});