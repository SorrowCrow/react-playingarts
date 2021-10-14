import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DeckContext from "./components/DeckContext";

ReactDOM.render(
    <React.StrictMode>
        <DeckContext>
            <App />
        </DeckContext>
    </React.StrictMode>,
    document.getElementById("root")
);
