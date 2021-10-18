import { FC } from "react";
import { useDeckContext } from "../../DeckContext";

const Supply: FC = ({}) => {
    const deckId = useDeckContext().deckId;
    const decks = useDeckContext().decks;
    return (
        <div id="supply">
            <div></div>
            {<div></div>}
        </div>
    );
};

export default Supply;
