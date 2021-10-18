const express = require("express");
const next = require("next");

// import fs from "fs";
// import path from "path";

// import React from "react";
// import ReactDomServer from "react-dom/server";

// import App from "../client/src/App";

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
            console.log(`Ready on http://localhost:${PORT}`);
        });

        server.get("/p/:id", (req, res) => {
            const actualPage = "/post";
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });

// const publicPath = path.join("public");

// app.use(express.static("client/build"));
// app.get("*", (req, res) => {
//     fs.readFile(path.resolve("./client/build/index.html"), "utf-8", (err, data) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send("Error");
//         }
//         return res.send(
//             data.replace(
//                 "<div id='root'></div>",
//                 `<div id="root">${ReactDomServer.renderToString(React.createElement(App))}</div>`
//             )
//         );
//     });
// });

// app.use(express.static(path.resolve(__dirname, "client", "build")));
