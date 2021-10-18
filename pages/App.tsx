// const Menu = import("./components/Menu");
import Menu from "./components/Menu";
import Deck from "./components/Deck";
import { FC } from "react";
import React from "react";

const App: FC = () => {
    return (
        <>
            <Menu />
            <Deck />
        </>
    );
};

export default App;
