import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Plus from "../../public/assets/plus.svg";
import Card from "./CardsComponents/Card";
import Quote from "./CardsComponents/Quote";
import { useCardsContext, useSetCardsContext } from "./CardsContext";

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const Cards = ({ cards, deck }) => {
    const cardsData = useCardsContext().cardsData;
    const setcardsData = useSetCardsContext().setcardsData;
    const maxIndex = cards.length;

    const updateDimensions = () => {
        let cardsItemWidth = 285;
        const width = document.getElementsByClassName(`cards-deck`)[0].clientWidth;
        let i = 1;

        while (width / cardsItemWidth !== 1) {
            cardsItemWidth = cardsItemWidth + 285 + 30;
            i++;
        }
        setcardsData((prevdata) => ({ ...prevdata, rowlength: i }));
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        if (cardsData.rowlength <= 0) return;
        let position = cardsData.position;

        if ((cardsData.tempindex + 1) % cardsData.rowlength === 0) {
            if (position !== cardsData.tempindex + 1) {
                setcardsData((prevdata) => ({ ...prevdata, position: cardsData.tempindex + 1 }));
                position = cardsData.tempindex + 1;
            }
        } else {
            let b = cardsData.tempindex + 1;
            while ((b + 1) % cardsData.rowlength !== 0) b++;

            if (b + 1 !== position) {
                setcardsData((prevdata) => ({ ...prevdata, position: b + 1 }));
                position = b + 1;
            }
        }

        let c = position - 1;

        let cardsItem = document.getElementsByClassName(`cardsItem`)[c];

        if (cardsItem === undefined)
            for (c; c > cardsData.position - 1 - cardsData.rowlength; c--) {
                cardsItem = document.getElementsByClassName(`cardsItem`)[c];
                if (cardsItem) {
                    setcardsData((prevstate) => ({ ...prevstate, oldindex: c, tempindex: c }));
                    break;
                }
            }
        else setcardsData((prevdata) => ({ ...prevdata, oldindex: cardsData.tempindex }));

        let id = "quote" + (cardsData.quotenumb ? 1 : 0);

        insertAfter(document.getElementById("quote1"), cardsItem);
        insertAfter(document.getElementById("quote0"), cardsItem);
    }, [cardsData.rowlength]);

    useEffect(() => {
        if (cardsData.position <= 0) return;
        let c = cardsData.position - 1;

        let cardsItem = document.getElementsByClassName(`cardsItem`)[c];

        if (cardsItem === undefined)
            for (c; c > cardsData.position - 1 - cardsData.rowlength; c--) {
                cardsItem = document.getElementsByClassName(`cardsItem`)[c];
                if (cardsItem) {
                    setcardsData((prevstate) => ({ ...prevstate, oldindex: c }));
                    break;
                }
            }

        let id = "quote" + (cardsData.quotenumb ? 1 : 0);

        insertAfter(document.getElementById(id), cardsItem);
    }, [cardsData.quotenumb]);

    useEffect(() => {
        if (cardsData.position <= 0) return;

        const currentCard = cardsData.oldindex;
        setcardsData((prevstate) => ({
            ...prevstate,
            quote: "",
        }));

        setTimeout(() => {
            setcardsData((prevstate) => ({
                ...prevstate,
                author: cards[cardsData.oldindex].author,
                quote: `"${cards[cardsData.oldindex].quote}"`,
                currentCard: currentCard,
            }));
        }, 250);
    }, [cardsData.oldindex]);

    let arrows = [];

    for (
        let i = 0;
        i <
        (cardsData.position <= maxIndex ? cardsData.rowlength : cardsData.rowlength - (cardsData.position - maxIndex));
        i++
    ) {
        let temp = cardsData.oldindex;
        while (temp >= cardsData.rowlength) temp -= cardsData.rowlength;

        if (i === temp) arrows.push(<div className={`quote-arrow`}></div>);
        else arrows.push(<div className={`quote-arrow`} style={{ opacity: 0 }}></div>);
    }

    return (
        <div className={`cards mx-auto`} id="cards">
            <div className={`cards-header`}>
                <h2>Cards</h2>
                <div className={`flex description-container content-between`}>
                    <div className={`description`}>
                        Hover the card to see animation. Click to read the story behind the artwork.
                    </div>
                    <a href="" className={`metamask h-p align-center flex`}>
                        <Plus />
                        metamask
                    </a>
                </div>
            </div>
            <div className={`cards-deck `}>
                <div className={`cards-deck-content flex flex-wrap content-between`} id={`cardsDeckContent`}>
                    {cards && cards.map((item: any, index: number) => <Card deck={deck} item={item} index={index} />)}
                    <Quote arrows={arrows} index={0} deck={deck} />
                    <Quote arrows={arrows} index={1} deck={deck} />
                </div>
            </div>
        </div>
    );
};

export default Cards;
