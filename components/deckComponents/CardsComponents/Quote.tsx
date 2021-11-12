import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useCardsContext } from "../CardsContext";
import Arrow from "../../../public/assets/arrow.svg";
import Link from "next/link";

const Quote = ({ arrows, index, deck }) => {
    const cardsData = useCardsContext().cardsData;

    const [height, setheight] = useState("0px");

    const [quote, setquote] = useState<any>("");
    const [author, setauthor] = useState("");

    const [position, setposition] = useState(0);

    useEffect(() => {
        if (cardsData.position <= 0 || cardsData.quotenumb == index) return;
        setposition(cardsData.position);
    }, [cardsData.position]);

    useEffect(() => {
        if (cardsData.quotenumb != index || position !== cardsData.position) return;
        setauthor(cardsData.author);
        setquote(cardsData.quote);
    }, [cardsData.author]);

    useEffect(() => {
        if (cardsData.quotenumb != index || cardsData.position <= 0) return;
        setauthor(cardsData.author);
        if (cardsData.oldindex === cardsData.currentCard) setquote(cardsData.quote);
        else setquote("");

        setTimeout(function () {
            setheight(document.getElementById(`quoteContent${index}`).clientHeight + "px");
        }, 1);
    }, [cardsData.quote, position]);

    useEffect(() => {
        if (cardsData.position <= 0) return;
        if (cardsData.quotenumb == index)
            setTimeout(function () {
                setheight(document.getElementById(`quoteContent${index}`).clientHeight + "px");
            }, 1);
        else
            setTimeout(function () {
                setheight("0px");
            }, 1);
    }, [cardsData.quotenumb]);

    return (
        <div className={`quoteCover overflow-hidden relative`} id={`quote${index}`} style={{ height: height }}>
            <div className={`quote absolute`} id={`quoteContent${index}`}>
                <div className={`line-cover flex align-center content-between`}>
                    <div className={`quote-line`}></div>
                    {arrows}
                </div>
                <div
                    className={`quote-content`}
                    style={
                        {
                            // height: height,
                        }
                    }
                >
                    <div className={`quote-content-cover`}>
                        <div className={`flex content-between`}>
                            <div className={`quote-content-quote relative`}>
                                <span className={`fadeOut ${quote !== "" && "fadeIn"}`}>{quote}</span>
                                <Link href={`${deck.Deck}/${cardsData.currentCard}`}>
                                    <div className={`h-p fadeOut flex align-center ${quote !== "" && "fadeIn"}`}>
                                        Read More <Arrow />
                                    </div>
                                </Link>
                                <div
                                    className={`${
                                        quote === "" ? "fadeIn" : "fadeOut"
                                    } skeleton-text-container absolute`}
                                >
                                    <div className={`skeleton-text`}></div>
                                    <div className={`skeleton-text`}></div>
                                    <div className={`skeleton-text`}></div>
                                    <div className={`skeleton-text`}></div>
                                </div>
                            </div>
                            <div className={`quote-content-author`}>
                                <Image src="/assets/victorvector.png" width="75" height="75" />
                                <h5 className={``}>{author}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
