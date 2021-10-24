import {
    GetServerSideProps,
    GetStaticPaths,
    GetStaticProps,
    InferGetServerSidePropsType,
    InferGetStaticPropsType,
} from "next";
import React, { FC, useEffect, useState } from "react";
import Cards from "../components/deckComponents/Cards";
import DeckHeader from "../components/deckComponents/DeckHeader";
import Supply from "../components/deckComponents/Supply";
import Logo from "../public/assets/logo.svg";
import Diamonds from "../public/assets/diamonds.svg";
import DeckContext from "../components/DeckContext";
import Menu from "../components/Menu";
import Gallery from "../components/deckComponents/Gallery";
import { useRouter } from "next/dist/client/router";

function Deck({ deck, cards }) {
    // const router = useRouter();

    // if (router.isFallback) {
    //     return <div>Loading...</div>;
    // }

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

    useEffect(() => {
        window.addEventListener("load", (event) => {
            document.getElementById("loader").style.opacity = "0";
            setTimeout(function () {
                setstate(undefined);
            }, 750);
        });
    }, []);

    return (
        <>
            {state}
            <Menu deck={deck} />
            <DeckHeader deck={deck} />
            <Cards cards={cards} />
            <Supply deck={deck} />
            <Gallery />
        </>
    );
}

export default Deck;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     return {
//         props: {
//             request: context.req.cookies,
//         },
//     };
// };
export const getStaticPaths: GetStaticPaths = async () => {
    // const paths = getAllPostIds();
    return {
        paths: [
            { params: { Deck: "zero" } },
            { params: { Deck: "one" } },
            { params: { Deck: "two" } },
            { params: { Deck: "three" } },
            { params: { Deck: "special" } },
            { params: { Deck: "future" } },
            { params: { Deck: "crypto" } },
        ],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const decks = require("../data/Decks.json");

    let deck = decks.filter((item) => {
        return item.Deck === params.Deck && item.Deck[0];
    });

    const cards = require(`../data/Decks/Deck${deck[0].id}.json`);

    return {
        props: {
            deck: deck[0],
            cards: cards,
        },
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 1,
    };
};
