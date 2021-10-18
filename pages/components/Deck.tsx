import { FC } from "react";
import Cards from "./deckComponents/Cards";
import DeckHeader from "./deckComponents/DeckHeader";
import Supply from "./deckComponents/Supply";

const Deck: FC = () => {
    return (
        <>
            <DeckHeader />
            <Cards />
            <Supply />
        </>
    );
};

export default Deck;
