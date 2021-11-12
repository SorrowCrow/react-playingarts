import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface Props {
    children: React.ReactNode;
}

interface ContextDataProps {
    cardsData: {
        height: string;
        prevheight: string;
        quotenumb: boolean;
        position: number;
        rowlength: number;
        oldindex: number;
        quote: any;
        author: string;
        tempindex: number;
        currentCard: number;
    };
}

interface ContextSetProps {
    setcardsData: Dispatch<
        SetStateAction<{
            height: string;
            prevheight: string;
            quotenumb: boolean;
            position: number;
            rowlength: number;
            oldindex: number;
            quote: any;
            author: string;
            tempindex: number;
            currentCard: number;
        }>
    >;
}

export const CardsContext = createContext({} as ContextDataProps);
export const SetCardsContext = createContext({} as ContextSetProps);

export function useCardsContext() {
    return useContext(CardsContext);
}

export function useSetCardsContext() {
    return useContext(SetCardsContext);
}

const CardsProvider = ({ children }: Props) => {
    const [cardsData, setcardsData] = useState({
        height: "0px",
        prevheight: "0px",
        quotenumb: false,
        position: null,
        rowlength: 0,
        oldindex: null,
        tempindex: 0,
        quote: "",
        author: "",
        currentCard: null,
    });

    const [rowlength, setrowlength] = useState(0);

    useEffect(() => {
        if (cardsData.position <= 0) return;
        if (rowlength !== cardsData.rowlength && rowlength !== 0) setrowlength(cardsData.rowlength);
        else if (rowlength === 0) {
            setrowlength(cardsData.rowlength);
            setcardsData((prevstate) => ({ ...prevstate, quotenumb: !cardsData.quotenumb }));
        } else setcardsData((prevstate) => ({ ...prevstate, quotenumb: !cardsData.quotenumb }));

        // setcardsData((prevstate) => ({ ...prevstate, quotenumb: !cardsData.quotenumb }));
    }, [cardsData.position]);

    return (
        <CardsContext.Provider value={{ cardsData }}>
            <SetCardsContext.Provider value={{ setcardsData }}>{children}</SetCardsContext.Provider>
        </CardsContext.Provider>
    );
};

export default CardsProvider;
