const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { PORT, mongoUri, captcha, privateKey } = require("./config");

app.prepare()
    .then(() => {
        const server = express();

        server.get("/quotes/", (req, res) => {
            const { index, deckid } = req.query;
            fetch(`${req.get("host")}/data/Decks/Deck${deckid}.json`).then((deck) => {
                console.log(deck[index].quote);
                res.status(200).json({ quotetext: deck[index].quote });
            });
            // res.status(200).send();
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, (err) => {
            if (err) throw err;
            console.log(`Ready on http://localhost:${PORT}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
