import dynamic from "next/dynamic";
import React, { FC, useEffect, useState } from "react";
import Logo from "./public/assets/logo.svg";
import Diamonds from "./public/assets/diamonds.svg";

const DeckContext = dynamic(() => import("./DeckContext"), {
    loading: () => (
        <>
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
            <div
                style={{
                    background: "#EAEAEA",
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    zIndex: -1,
                }}
            >
                <Diamonds style={{ margin: "auto", animation: "2s linear infinite loader" }} />
            </div>
        </>
    ),
});
const Menu = dynamic(() => import("./Menu"), {
    loading: () => (
        <>
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
            <div
                style={{
                    background: "#EAEAEA",
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    zIndex: -1,
                }}
            >
                <Diamonds style={{ margin: "auto", animation: "2s linear infinite loader" }} />
            </div>
        </>
    ),
});
const Deck = dynamic(() => import("../pages/[Deck]"), {
    loading: () => (
        <>
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
            <div
                style={{
                    background: "#EAEAEA",
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    zIndex: -1,
                }}
            >
                <Diamonds style={{ margin: "auto", animation: "2s linear infinite loader" }} />
            </div>
        </>
    ),
});

import { InferGetStaticPropsType } from "next";

const App = ({ loading }: InferGetStaticPropsType<typeof GetStaticProps>) => {
    const [load, setload] = useState(loading);

    useEffect(() => {
        setload(false);
    }, []);

    return (
        <>
            {load ? (
                <>
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
                    <div
                        style={{
                            background: "#EAEAEA",
                            position: "fixed",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            zIndex: -1,
                        }}
                    >
                        <Diamonds style={{ margin: "auto", animation: "2s linear infinite loader" }} />
                    </div>
                </>
            ) : (
                <React.StrictMode></React.StrictMode>
            )}
        </>
    );
};

export default App;

export const GetStaticProps = async () => {
    return {
        props: {
            loading: true,
        },
    };
};
