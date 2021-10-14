import { FC } from "react";
import { ReactComponent as Metamask } from "../../assets/+metamask.svg";

const Cards: FC = () => {
    return (
        <div className={`cards mg-1`} id="cards">
            <div className={`mg-1`}>
                <h2>Cards</h2>
                <div className={`flex`}>
                    <div className={`description`}>
                        Hover the card to see animation. Click to read the story behind the artwork.
                    </div>
                    <Metamask />
                </div>
            </div>
            <div className={`deck`}></div>
        </div>
    );
};

export default Cards;
