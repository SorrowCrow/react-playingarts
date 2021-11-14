import React, { useEffect, useState } from "react";
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
import Link from "next/link";

const THRESHOLD = 10;

const Header = ({ card, deck, cards, id }) => {
    const [loading, setloading] = useState(true);

    let image;
    function handleHover(e) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;

        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

        image.style.transform = `perspective(${clientWidth}px) rotateX(${-rotateY}deg) rotateY(${-rotateX}deg) scale3d(1, 1, 1)`;
        setTimeout(() => {
            image.style.transition = ``;
        }, 250);
    }

    function resetStyles(e) {
        image.style.transition = `0.25s ease-in-out`;
        image.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    useEffect(() => {
        function listener() {
            const fixedscrolllockoffset = document.getElementById("fixedscrolllock").offsetTop;
            const image = document.getElementById("image");
            const imageContainer = document.getElementById("imageContainer");
            if (!image) return;
            const imageoffset = window.pageYOffset + imageContainer.offsetTop + image.clientHeight;

            if (imageoffset >= fixedscrolllockoffset) {
                image.style.position = "absolute";
                image.style.bottom =
                    "-" + (fixedscrolllockoffset - imageContainer.offsetTop - image.clientHeight) + "px";
            } else {
                image.style.position = "";
                image.style.bottom = "";
            }
        }

        window.addEventListener("scroll", listener, false);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    const [readMore, setreadMore] = useState(false);
    const [quoteHeight, setquoteHeight] = useState(undefined);
    const [height, setheight] = useState(undefined);

    useEffect(() => {
        const quote = document.getElementById(`quote`);
        image = document.getElementById("image");
        if (!quote) return;
        setquoteHeight(quote.clientHeight);
        setheight(quote.clientHeight);
        setloading(true);
    }, [id]);

    useEffect(() => {
        image = document.getElementById("image");
        if (loading) {
            const video: any = document.getElementsByTagName("video")[0];
            video.load();
        }
        const fixedscrolllockoffset = document.getElementById("fixedscrolllock").offsetTop;
        const imageContainer = document.getElementById("imageContainer");
        if (!image) return;
        image.addEventListener("mousemove", handleHover);
        image.addEventListener("mouseleave", resetStyles);
        const imageoffset = window.pageYOffset + imageContainer.offsetTop + image.clientHeight;

        if (imageoffset >= fixedscrolllockoffset) {
            image.style.position = "absolute";
            image.style.bottom = "-" + (fixedscrolllockoffset - imageContainer.offsetTop - image.clientHeight) + "px";
        } else {
            image.style.position = "";
            image.style.bottom = "";
        }
        return () => {
            image.removeEventListener("mousemove", handleHover);
            image.removeEventListener("mouseleave", resetStyles);
        };
    }, [loading]);

    useEffect(() => {
        const quote = document.getElementById(`quote`);
        if (!quote) return;
        if (readMore) {
            quote.style.height = "auto";
            const height = quote.clientHeight;
            quote.style.height = "";
            quote.style.height = height + "px";
            setheight(height);
        } else {
            if (quoteHeight !== undefined && quoteHeight !== 0) {
                quote.style.height = quoteHeight + "px";
                setheight(quoteHeight);
            } else quote.style.height = "";
        }
    }, [readMore]);

    return (
        <>
            <div className={`nav fixed w-100`}>
                {cards[Number(id) - 1] && (
                    <Link href={`/${deck.Deck}/${Number(id) - 1}`} scroll={false}>
                        <div className="h-p item leftItem flex content-center align-center">
                            <div className={`leftArrow arrow`}></div>
                        </div>
                    </Link>
                )}
                {cards[Number(id) + 1] && (
                    <Link href={`/${deck.Deck}/${Number(id) + 1}`} scroll={false}>
                        <div className="h-p item rightItem flex content-center align-center">
                            <div className={`rightArrow arrow`}></div>
                        </div>
                    </Link>
                )}

                <Link href={{ pathname: `/${deck.Deck}`, query: { card: id } }}>
                    <div className={`exitCover absolute`}>
                        <div className={`h-p exit content-center flex align-center relative`}>
                            <div className="exitItem absolute"></div>
                            <div className="exitItem absolute"></div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`cardBlock-cardInfo flex flex-wrap content-between`}>
                <div className={`cardBlock-cardInfo-image relative flex`} id={`imageContainer`}>
                    {loading && (
                        <div
                            id="image"
                            style={
                                deck.Deck === "crypto"
                                    ? {
                                          borderRadius: "15px",
                                          overflow: "hidden",
                                          display: "flex",
                                          opacity: "1",
                                          zIndex: 1,
                                          background: "#181818",
                                      }
                                    : {
                                          borderRadius: "15px",
                                          overflow: "hidden",
                                          display: "flex",
                                          opacity: "1",
                                          zIndex: 1,
                                          background: "white",
                                      }
                            }
                        >
                            <Diamonds
                                fill={`#C4C4C4`}
                                style={{ margin: "auto", animation: "2s linear infinite loader" }}
                            />
                        </div>
                    )}
                    <video
                        loop
                        autoPlay
                        muted
                        playsInline
                        preload="metadata"
                        id="image"
                        style={loading ? { opacity: "0" } : {}}
                        onLoadedMetadata={(e) => {
                            setloading(false);
                        }}
                    >
                        <source src={card.url.includes(".gif") ? card.url : card.url + ".mp4"} type="video/mp4" />
                    </video>
                </div>
                <div className={`cardBlock-cardInfo-cardText`}>
                    <div className="container flex flex-column content-center">
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
                                    <Share className={`share h-p`} />
                                </div>
                                <div className={`price flex`}>
                                    0.275
                                    <Eth />
                                </div>
                            </div>
                        )}
                    </div>
                    <div style={{ height: height + "px" }} className={`quoteCover relative overflow-hidden`}>
                        <div className={`quote ${readMore && "full"}`} id={`quote`}>
                            "{card.quote}"
                        </div>
                    </div>
                    <div className={`h-p flex align-center readMore`} onClick={() => setreadMore(!readMore)}>
                        {height >= 450 &&
                            (!readMore ? (
                                <>
                                    Read More <Arrow />
                                </>
                            ) : (
                                <>
                                    Read Less <Arrow />
                                </>
                            ))}
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
            <div className={`nfts w-100 relative`} id={`fixedscrolllock`}></div>
        </>
    );
};

export default Header;
