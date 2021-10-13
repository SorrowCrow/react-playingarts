import { FC, ReactElement } from "react";

interface Props {
    items: (String | ReactElement)[];
}

const DeckMenu = ({ items }: Props) => {
    return (
        <div className={`deckMenu flex align-center`}>
            {items.map((item: String | ReactElement) => (
                <div className={`deckMenu-item ${typeof item === "string" ? "h-p" : ""}`}>{item}</div>
            ))}
        </div>
    );
};

export default DeckMenu;
