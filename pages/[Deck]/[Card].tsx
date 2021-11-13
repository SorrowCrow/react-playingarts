import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Logo from "../../public/assets/logo.svg";
import Diamonds from "../../public/assets/diamonds.svg";
import Menu from "../../components/Menu";
import Header from "../../components/cardsComponents/Header";

function Card({ deck, card, cards, id }) {
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
                left: "0",
                top: "0",
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
                menustyle={{ background: "#181818" }}
                logomenubuttonfill={{ fill: "rgba(234, 234, 234, 0.5)" }}
                logocolor="rgba(234, 234, 234, 0.5)"
            />
            <div className="cardBlock">
                <Header deck={deck} card={card} cards={cards} id={id} />
            </div>
        </>
    );
}

export default Card;

import decks from "../../public/data/Decks.json";

export const getStaticPaths: GetStaticPaths = async () => {
    let paths = [];
    decks.map((deck) => {
        const cards = require(`../../public/data/Decks/Deck${deck.id}.json`);
        cards.map((card: any, index: number) => {
            paths.push({
                params: { Deck: deck.Deck, Card: index.toString() },
            });
        });
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let deck = decks.filter((item) => {
        return item.Deck === params.Deck && item.Deck[0];
    });
    const cards = require(`../../public/data/Decks/Deck${deck[0].id}.json`);

    return {
        props: {
            deck: deck[0],
            card: cards[Number(params.Card)],
            cards: cards,
            id: params.Card,
        },
    };
};
