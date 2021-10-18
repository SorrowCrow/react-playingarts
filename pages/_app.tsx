import React from "react";
import App from "./App";
import DeckContext from "./DeckContext";
import "./public/scss/main.scss";

function MyApp() {
    return (
        <React.StrictMode>
            <DeckContext>
                <App />
            </DeckContext>
        </React.StrictMode>
    );
}

export default MyApp;
