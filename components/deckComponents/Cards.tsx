import React, { FC } from "react";
import Plus from "../../public/assets/plus.svg";
import Card from "./CardsComponents/Card";

const Cards = ({ cards }) => {
    return (
        <div className={`cards pg-1 mx-auto`} id="cards">
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
                <div className={`cards-deck-content flex flex-wrap content-center`}>
                    {cards &&
                        cards.map((item: any, index: string | number) => (
                            <Card item={item} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
