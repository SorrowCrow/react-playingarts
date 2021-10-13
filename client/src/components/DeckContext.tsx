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
            name: `Crypto Edition`,
            description: `A deck of playing cards featuring works of 55 leading artists.
            Unique digital art collectibles living on the Ethereum blockchain.`,
        },
        {},
    ];
    return <DeckContext.Provider value={{ decks, deckId, setdeckId }}>{children}</DeckContext.Provider>;
};

export default DeckProvider;
