import Image from "next/image";
import { useEffect, useState } from "react";
import { useCardsContext } from "../CardsContext";
import Arrow from "../../../public/assets/arrow.svg";

const Quote = ({ arrows, index }) => {
    const cardsData = useCardsContext().cardsData;

    const [height, setheight] = useState("0px");

    const [quote, setquote] = useState<any>("");
    const [author, setauthor] = useState("");

    const [position, setposition] = useState(0);

    const [readMore, setreadMore] = useState(false);
    const [quoteHeight, setquoteHeight] = useState(0);

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

        setTimeout(function () {
            setreadMore(false);
            const span = document.getElementById(`span${index}`);
            span.style.height = "";

            let heighto = span.clientHeight;

            if (heighto > 225) setquoteHeight(225);
            else setquoteHeight(heighto);

            setheight(document.getElementById(`quoteContent${index}`).clientHeight + "px");
        }, 1);
    }, [cardsData.quote, position]);

    useEffect(() => {}, [quote]);

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

    useEffect(() => {
        if (cardsData.position <= 0 || cardsData.quotenumb != index) return;
        const span = document.getElementById(`span${index}`);
        if (!span) return;
        if (readMore) {
            span.style.height = "auto";
            const height = span.clientHeight;
            span.style.height = "";
            span.style.height = height + "px";
            setTimeout(function () {
                setheight(document.getElementById(`quoteContent${index}`).clientHeight + "px");
            }, 1);
        } else {
            span.style.height = quoteHeight + "px";
            setTimeout(function () {
                setheight(document.getElementById(`quoteContent${index}`).clientHeight + "px");
            }, 1);
        }
    }, [readMore]);

    return (
        <div className={`quoteCover overflow-hidden relative`} id={`quote${index}`} style={{ height: height }}>
            <div className={`quote absolute`} id={`quoteContent${index}`}>
                <div className={`line-cover flex align-center content-between`}>
                    <div className={`quote-line`}></div>
                    {arrows}
                </div>
                <div className={`quote-content`}>
                    <div className={`quote-content-cover ${cardsData.quote === "" ? "fadeOut" : "fadeIn"}`}>
                        <div className={`flex`}>
                            <div className={`quote-content-quote relative `}>
                                <span id={`span${index}`} className={readMore && "full"}>
                                    {quote}
                                    <div className={`absolute`}></div>
                                </span>
                                {quoteHeight === 225 && !readMore && (
                                    <div className={`h-p flex align-center `} onClick={() => setreadMore(!readMore)}>
                                        Read More <Arrow fill={`rgba(10, 10, 10, 0.5)`} />
                                    </div>
                                )}
                            </div>
                            <div className={`quote-content-author`}>
                                <Image src="/assets/victorvector.png" width="75" height="75" />
                                <h5>{author}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
