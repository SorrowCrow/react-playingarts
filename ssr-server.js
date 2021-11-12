const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { PORT, mongoUri, captcha, privateKey } = require("./config");

app.prepare()
    .then(() => {
        const server = express();

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, (err) => {
            if (err) throw err;
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
