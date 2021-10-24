import dynamic from "next/dynamic";

import React, { Suspense, useEffect, useState } from "react";
import Logo from "../public/assets/logo.svg";
import Diamonds from "../public/assets/diamonds.svg";

// const DeckContext = dynamic(() => import("../components/DeckContext"));
const Menu = React.lazy(() => import("../components/Menu"));

const Deck = dynamic(() => import("./[Deck]"));
import DeckContext from "../components/DeckContext";
import { GetStaticProps } from "next";
// import Menu from "../components/Menu";
// import Deck from "../components/Crypto";

function Index({}) {
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
            {/* <Menu /> */}
        </>
    );
}

export default Index;

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const decks = require("../data/Decks.json");

//     let deck = decks.filter((item) => {
//         return item.Deck === params.Deck && item.Deck[0];
//     });

//     const cards = require(`../data/Decks/Deck${deck[0].id}.json`);

//     return {
//         props: {
//             deck: { name: "", Deck: "" },
//         },
//         // Re-generate the post at most once per second
//         // if a request comes in
//         revalidate: 1,
//     };
// };
