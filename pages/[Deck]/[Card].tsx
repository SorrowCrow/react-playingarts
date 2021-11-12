import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Logo from "../../public/assets/logo.svg";
import Diamonds from "../../public/assets/diamonds.svg";
import Menu from "../../components/Menu";

function Card({ deck, cards }) {
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
            <Diamonds style={{ margin: "auto", animation: "2s linear infinite loader" }} />
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
            <Menu />
        </>
    );
}

export default Card;

const decks = require("../../public/data/Decks.json");

export const getStaticPaths: GetStaticPaths = async () => {
    let paths = [];
    decks.map((deck) => {
        const cards = require(`../../public/data/Decks/Deck${deck.id}.json`);
        cards.map((card, index) => {
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
    console.log(params);

    return {
        props: {
            deck: deck[0],
            cards: cards,
        },
    };
};
