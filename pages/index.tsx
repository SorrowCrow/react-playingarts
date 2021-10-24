import dynamic from "next/dynamic";

import React, { Suspense, useEffect, useState } from "react";
import Logo from "../public/assets/logo.svg";
import Diamonds from "../public/assets/diamonds.svg";

// const DeckContext = dynamic(() => import("../components/DeckContext"));
const Menu = React.lazy(() => import("../components/Menu"));

const Deck = dynamic(() => import("./[Deck]"));
import DeckContext from "../components/DeckContext";
// import Menu from "../components/Menu";
// import Deck from "../components/Crypto";

function Index() {
    const [state, setstate] = useState(
        <div
            id="loader"
            style={{
                transition: "0.75s",
                background: "#EAEAEA",
                position: "fixed",
                width: "100%",
                height: "100%",
                display: "flex",
                opacity: "1",
                zIndex: 10000,
            }}
        >
            <div
                style={{
                    position: "fixed",
                    background: "rgba(0, 0, 0, 0.05)",
                    top: "10px",
                    right: "10px",
                    left: "10px",
                    height: "70px",
                    borderRadius: "10px",
                    display: "flex",
                }}
            >
                <Logo fill="white" style={{ margin: "auto" }} />
            </div>
            {/* <div style={{ position: "fixed", left: "-50px", fontFamily: "aldrich" }}>.</div> */}
            <Diamonds style={{ margin: "auto", animation: "2s linear infinite loader" }} />
        </div>
    );
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(false);
        window.addEventListener("load", (event) => {
            document.getElementById("loader").style.opacity = "0";
            setTimeout(function () {
                setstate(undefined);
            }, 750);
            // setstate(undefined);
        });
    }, []);
    const style = ``;
    return (
        <>
            {state}
        </>
    );
}

export default Index;
