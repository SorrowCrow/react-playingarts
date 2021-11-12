import React, { useState } from "react";
import Arrow from "../../public/assets/arrow.svg";
import Diamonds from "../../public/assets/diamonds.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OpenseaIcon from "../../public/assets/opensea-icon.svg";
import Share from "../../public/assets/share.svg";
import Eth from "../../public/assets/eth.svg";
import Web from "../../public/assets/socials.svg";
import Twitter from "../../public/assets/socials-1.svg";
import Instagram from "../../public/assets/socials-2.svg";
import Facebook from "../../public/assets/socials-3.svg";
import Behance from "../../public/assets/socials-4.svg";
import Social from "../../public/assets/socials-5.svg";

const Header = ({ card, deck }) => {
    const [loading, setloading] = useState(true);
    console.log(deck);

    return (
        <div className={`cardBlock-cardInfo flex flex-wrap content-between`}>
            <div className={`cardBlock-cardInfo-image`}>
                {loading && (
                    <div
                        id="loader"
                        style={{
                            transition: "0.75s",
                            background: "#EAEAEA",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            opacity: "1",
                            zIndex: 1,
                        }}
                    >
                        <Diamonds style={{ margin: "auto", animation: "2s linear infinite loader" }} />
                    </div>
                )}
                <LazyLoadImage
                    src={card.url.includes(".gif") ? card.url : card.url + ".jpg"}
                    effect="opacity"
                    onLoad={(e) => {
                        e.target.src.indexOf("data:image/gif;base64") < 0 && setloading(false);
                    }}
                />
            </div>
            <div className={`cardBlock-cardInfo-cardText`}>
                <h2>{card.author}</h2>
                <div className={`location`}>{card.author}</div>
                <div className={`line w-100`} />
                {deck.Deck === "crypto" && (
                    <div className={`nft-info w-100 flex content-between align-center`}>
                        <div className={`flex align-center`}>
                            <div className={`ethBackground buyNft flex h-p align-center`}>
                                <OpenseaIcon />
                                buy nft
                            </div>
                            <Share classname={`share h-p`} />
                        </div>
                        <div className={`price flex`}>
                            0.275
                            <Eth />
                        </div>
                    </div>
                )}
                <div className={`quote`}>
                    "{card.quote}"
                    <div className={`h-p flex align-center `}>
                        Read More <Arrow />
                    </div>
                </div>
                <div className={`flex relative align-center`}>
                    <div className={`authorsLine w-100 align-center absolute`}></div>
                    <div className={`authorsArrow relative`} />
                </div>
                <div className={`authorInfo flex w-100`}>
                    <LazyLoadImage src="/assets/victorvector2.png" effect="opacity" />
                    <div className={`bio`}>
                        <h5 className={`author`}>{card.author}</h5>
                        <div className={`status`}>{card.status}</div>
                        <div className={`socials w-100 flex`}>
                            {card.web && (
                                <a href={card.web}>
                                    <Web />
                                </a>
                            )}
                            {card.twitter && (
                                <a href={card.twitter}>
                                    <Twitter />
                                </a>
                            )}
                            {card.instagram && (
                                <a href={card.instagram}>
                                    <Instagram />
                                </a>
                            )}
                            {card.facebook && (
                                <a href={card.facebook}>
                                    <Facebook />
                                </a>
                            )}
                            {card.behance && (
                                <a href={card.behance}>
                                    <Behance />
                                </a>
                            )}
                            {card.social && (
                                <a href={card.social}>
                                    <Social />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
