import { ReactElement } from "react";

interface Props {
    items: (string | ReactElement)[];
    id: string | undefined;
    onClick: boolean;
}

function scroll(id: any) {
    const element = document.querySelector(id);
    element !== null &&
        window.scrollTo({
            top: element.offsetTop - 140,
            behavior: "smooth",
        });
}

const DeckMenu = ({ items, id, onClick }: Props) => {
    return (
        <div id={id} className={`deckMenu flex align-center`}>
            {items.map((item: string | ReactElement) => (
                <div
                    onClick={onClick ? () => typeof item === "string" && scroll("#" + item) : undefined}
                    id={id === "" ? "deckMenu_" + item.toString() : ""}
                    className={`deckMenu-item ${typeof item === "string" ? "h-p" : ""}`}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default DeckMenu;
