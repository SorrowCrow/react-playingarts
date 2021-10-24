import { createContext, useContext, useState } from "react";

interface Props {
    children: React.ReactNode;
}

interface ContextProps {
    deckId: number;
    setdeckId: React.Dispatch<React.SetStateAction<number>>;
    decks: (
        | {
              name: string;
              description: string;
          }
        | {
              name?: undefined;
              description?: undefined;
          }
    )[];
}
export const DeckContext = createContext({} as ContextProps);

export function useDeckContext() {
    return useContext(DeckContext);
}

const DeckProvider = ({ children }: Props) => {
    const [deckId, setdeckId] = useState(6);
    const decks = [
        {
            name: `Edition Zero`,
            description: `Edition Zero was released in 2012 and marked the beginning of Playing Arts series. Now we are bringing it back, powering by beautiful animations in Augmented Reality from today’s leading motion designers.`,
        },
        {
            name: `Edition One`,
            description: `From the two of clubs to the ace of spades, each card in this deck has been individually designed by one of the 55 selected international artists in their distinct style and technique.`,
        },
        {
            name: `Edition Two`,
            description: `From the two of clubs to the ace of spades, each card in this deck has been individually designed by one of the 55 selected international artists in their distinct style and technique.`,
        },
        {
            name: `Edition Three`,
            description: `From the two of clubs to the ace of spades, each card in this deck has been individually designed by one of the 55 selected international artists in their distinct style and technique.`,
        },
        {
            name: `Special Edition`,
            description: `537 artists from 67 countries participated in design contest, showing their vision of the custom playing cards. Each contestant was asked to create an artwork for one particular card in their distinct style.`,
        },
        {
            name: `Future Edition`,
            description: `299 international artists, designers and studios were using playing card as a canvas to illustrate their vision of what the world will look like 100 years from now. Selected artworks formed two Future Edition decks.`,
        },
        {
            name: `Crypto Edition`,
            description: `A deck of playing cards featuring works of 55 leading artists.
            Unique digital art collectibles living on the Ethereum blockchain.`,
        },
    ];
    return <DeckContext.Provider value={{ decks, deckId, setdeckId }}>{children}</DeckContext.Provider>;
};

export default DeckProvider;
