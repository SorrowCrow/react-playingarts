import { FC } from "react";
import Plus from "../../public/assets/plus.svg";
import Card from "./CardsComponents/Card";

const Cards: FC = () => {
    return (
        <div className={`cards pg-1`} id="cards">
            <div className={`mg-1`}>
                <h2>Cards</h2>
                <div className={`flex description-container`}>
                    <div className={`description`}>
                        Hover the card to see animation. Click to read the story behind the artwork.
                    </div>
                    <a href="" className={`metamask h-p align-center flex`}>
                        <Plus />
                        metamask
                    </a>
                </div>
            </div>
            <div className={`cards-deck flex flex-wrap content-center`}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Cards;
