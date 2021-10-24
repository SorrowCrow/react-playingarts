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

function Deck({ deck }) {
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
            <Cards />
            <Supply />
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
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    // const res = await fetch(`https://.../${params.Deck}`);
    // const deck = await res.json();

    // Pass post data to the page via props
    console.log(params);
    const deckname = params.Deck;

    const decks = [
        {
            name: `Edition Zero`,
            Deck: "zero",
            description: `Edition Zero was released in 2012 and marked the beginning of Playing Arts series. Now we are bringing it back, powering by beautiful animations in Augmented Reality from today’s leading motion designers.`,
            id: 0,
        },
        {
            name: `Edition One`,
            Deck: "one",
            description: `From the two of clubs to the ace of spades, each card in this deck has been individually designed by one of the 55 selected international artists in their distinct style and technique.`,
            id: 1,
        },
        {
            name: `Edition Two`,
            Deck: "two",
            description: `From the two of clubs to the ace of spades, each card in this deck has been individually designed by one of the 55 selected international artists in their distinct style and technique.`,
            id: 2,
        },
        {
            name: `Edition Three`,
            Deck: "three",
            description: `From the two of clubs to the ace of spades, each card in this deck has been individually designed by one of the 55 selected international artists in their distinct style and technique.`,
            id: 3,
        },
        {
            name: `Special Edition`,
            Deck: "special",
            description: `537 artists from 67 countries participated in design contest, showing their vision of the custom playing cards. Each contestant was asked to create an artwork for one particular card in their distinct style.`,
            id: 4,
        },
        {
            name: `Future Edition`,
            Deck: "future",
            description: `299 international artists, designers and studios were using playing card as a canvas to illustrate their vision of what the world will look like 100 years from now. Selected artworks formed two Future Edition decks.`,
            id: 5,
        },
        {
            name: `Crypto Edition`,
            Deck: "crypto",
            description: `A deck of playing cards featuring works of 55 leading artists.
            Unique digital art collectibles living on the Ethereum blockchain.`,
            id: 6,
        },
    ];
    let Deck: { name: string; Deck: string; description: string; id: number } = null;
    decks.map((deck) => {
        if (deck.Deck === params.Deck) {
            Deck = deck;
            return;
        }
    });

    return {
        props: { deck: Deck },
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 1,
    };
};
