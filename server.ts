import path from "path";
import express from "express";
const app = express();

const { PORT, mongoUri, captcha, privateKey } = require("./config");

const publicPath = path.join("public");

// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => console.log(`Port: ${PORT}`));
// }
