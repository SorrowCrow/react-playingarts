import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Cards from "../components/deckComponents/Cards";
import DeckHeader from "../components/deckComponents/DeckHeader";
import Supply from "../components/deckComponents/Supply";
import Logo from "../public/assets/logo.svg";
import Diamonds from "../public/assets/diamonds.svg";
import Menu from "../components/Menu";
import Gallery from "../components/deckComponents/Gallery";
import CardsContext from "../components/deckComponents/CardsContext";

function Deck({ deck, cards }) {
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
                <Logo fill="#181818" style={{ margin: "auto" }} />
            </div>
            <Diamonds fill="#C4C4C4" style={{ margin: "auto", animation: "2s linear infinite loader" }} />
        </div>
    );

    useEffect(() => {
        if (document.readyState != "complete") {
            window.addEventListener("load", (event) => {
                document.getElementById("loader").style.opacity = "0";
                setTimeout(function () {
                    setstate(undefined);
                }, 750);
            });
        } else {
            setstate(undefined);
        }
    }, []);

    return (
        <>
            {state}
            <Menu
                deck={deck}
                menustyle={{ background: "linear-gradient(90deg, #58CDFF 0%, #C77BFF 100%)" }}
                logomenubuttonfill={{ fill: "#181818" }}
                logocolor="#181818"
                metamaskbackground={"#181818"}
            />
            <DeckHeader deck={deck} />
            <CardsContext>
                <Cards cards={cards} deck={deck} />
            </CardsContext>
            <Supply deck={deck} />
            <Gallery />
        </>
    );
}

export default Deck;

const decks = require("../public/data/Decks.json");

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = decks.map((deck) => ({
        params: { Deck: deck.Deck },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let deck = decks.filter((item) => {
        return item.Deck === params.Deck && item.Deck[0];
    });

    const cards = require(`../public/data/Decks/Deck${deck[0].id}.json`);

    return {
        props: {
            deck: deck[0],
            cards: cards,
        },
    };
};
