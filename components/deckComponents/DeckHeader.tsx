import { FC, useEffect, useState } from "react";
import OpenseaIcon from "../../public/assets/opensea-icon.svg";
import Share from "../../public/assets/share.svg";
import DeckMenu from "./DeckMenu";

import React from "react";
import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

interface Props {
    request: IncomingMessage & {
        cookies: NextApiRequestCookies;
    };
}

const DeckHeader = ({ deck }) => {
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        window.addEventListener("load", () => {
            updateDimensions();
        });
    }, []);

    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const updateDimensions = () => {
        const backgroundVideo = document.getElementById("background-video");
        const width = window.innerWidth;
        const height = backgroundVideo.clientHeight;

        if (width / height < 1.77777777778) {
            document.getElementById("background-video-iframe").style.padding = `${height + "px"} 0 0 ${
                height * 1.77777777778 + "px"
            }`;
        } else {
            document.getElementById("background-video-iframe").style.padding = `${width * 0.5625 + "px"} 0 0 ${
                width + "px"
            }`;
        }

        setWindowWidth(width);
    };
    const [items, setitems] = useState([]);
    useEffect(() => {
        setitems([]);
        let items = [];
        for (let i = 0; i < width / 326; i++) {
            items.push(
                <div key={width + i} className={`looped-item`}>
                    11 days / 11 cards of giveaways
                </div>
            );
        }
        setitems(items);
    }, [width]);

    return (
        <>
            <div className={`DeckHeader overflow-hidden relative`}>
                <div className={`videoCover absolute`}></div>
                <div id="background-video">
                    <div style={{ position: "absolute" }} id="background-video-iframe">
                        <iframe
                            src="https://player.vimeo.com/video/636320395?h=e1cccb67eb&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1"
                            style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
                {/* <div className={`mgl-2`}> */}
                <div className={`content mx-auto`}>
                    <h1 className={`flex`}>
                        {deck.name}
                        {deck.id === 6 && <div className={`nft`}>NFT</div>}
                    </h1>
                    <div className={`description`}>{deck.description}</div>
                    <DeckMenu
                        items={[
                            <>
                                {deck.id === 6 && (
                                    <a href="" className={`openseaBtn eth h-p align-center flex`}>
                                        <OpenseaIcon />
                                        <div>nft collection</div>
                                    </a>
                                )}
                                <a href="">
                                    <Share className={`h-p`} />
                                </a>
                            </>,
                            "cards",
                            "supply",
                            "stats",
                            "product",
                            "gallery",
                            "roadmap",
                        ]}
                        id="submenu"
                        onClick={true}
                    />
                </div>
            </div>
            <div className={`bg-daysleftCarousel`}>
                <div className={`daysleftCarousel flex mg-1 overflow-hidden relative align-center`}>
                    <div className={`fader`}></div>
                    <div className={`flex mg--3 looped align-center`}>{items}</div>
                    <div className={`fader tr-180`}></div>
                </div>
            </div>
        </>
    );
};

export default DeckHeader;
