import React from "react";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Diamonds from "../../../public/assets/diamonds.svg";
import { useCardsContext, useSetCardsContext } from "../CardsContext";
import Link from "next/link";

const Card = ({ item, index, deck }) => {
    const cardsData = useCardsContext().cardsData;
    const setcardsData = useSetCardsContext().setcardsData;

    const [hover, sethover] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(true);
    }, [item.url]);

    useEffect(() => {
        if (hover) {
            let cardsItemWidth = 285;
            const width = document.getElementsByClassName(`cards-deck`)[0].clientWidth;
            let i = 1;

            while (width / cardsItemWidth !== 1) {
                cardsItemWidth = cardsItemWidth + 285 + 30;
                i++;
            }

            if (cardsData.rowlength !== i)
                setcardsData((prevdata) => ({ ...prevdata, rowlength: i, tempindex: index }));
            else {
                let position = cardsData.position;
                if ((index + 1) % i === 0) {
                    if (position !== index + 1) setcardsData((prevdata) => ({ ...prevdata, position: index + 1 }));
                } else {
                    let b = index + 1;
                    while ((b + 1) % i !== 0) b++;

                    if (b + 1 !== position) setcardsData((prevdata) => ({ ...prevdata, position: b + 1 }));
                }
                index !== cardsData.oldindex &&
                    setcardsData((prevdata) => ({ ...prevdata, oldindex: index, tempindex: index }));
            }
        }
    }, [hover]);

    return (
        <Link href={`${deck.Deck}/${index}`}>
            <div
                className={`item cardsItem h-p`}
                id={`card`}
                onMouseEnter={() => sethover(!hover)}
                onMouseLeave={() => sethover(!hover)}
            >
                <div className={`artwork-cover`}>
                    <div className={`artwork relative`}>
                        {/* {hover && (
                            <video loop muted playsInline preload="metadata" className="w-100 h-100" style={{ zIndex: 100 }}>
                        <source src={mp4url} type="video/mp4" />
                        </video>
                )} */}
                        {loading && (
                            <div
                                id="loader"
                                style={
                                    deck.Deck === "crypto"
                                        ? {
                                              borderRadius: "15px",
                                              overflow: "hidden",
                                              transition: "0.75s",
                                              position: "absolute",
                                              width: "100%",
                                              height: "100%",
                                              display: "flex",
                                              opacity: "1",
                                              zIndex: 1,
                                              background: "#181818",
                                          }
                                        : {
                                              borderRadius: "15px",
                                              overflow: "hidden",
                                              transition: "0.75s",
                                              position: "absolute",
                                              width: "100%",
                                              height: "100%",
                                              display: "flex",
                                              opacity: "1",
                                              zIndex: 1,
                                              background: "white",
                                          }
                                }
                            >
                                <Diamonds
                                    fill="#C4C4C4"
                                    style={{ margin: "auto", animation: "2s linear infinite loader" }}
                                />
                            </div>
                        )}
                        <LazyLoadImage
                            src={item.url.includes(".gif") ? item.url : item.url + ".jpg"}
                            effect="opacity"
                            onLoad={(e) => {
                                e.target.src.indexOf("data:image/gif;base64") < 0 && setloading(false);
                            }}
                        />
                        {/* .mp4?3?3 */}
                    </div>
                </div>
                <div className={`author relative`}>
                    {item.author}
                    {item.name && <div className={`name`}>{item.name}</div>}
                </div>
                {/* {hover && (
                
            )} */}
            </div>
        </Link>
    );
};

export default Card;
