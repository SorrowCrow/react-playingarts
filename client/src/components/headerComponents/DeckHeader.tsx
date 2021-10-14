import { FC, useEffect, useState } from "react";
import { useDeckContext } from "../DeckContext";
import { ReactComponent as OpenseaButton } from "../../assets/openseaBtn.svg";
import { ReactComponent as Share } from "../../assets/share.svg";
import DeckMenu from "../deckComponents/DeckMenu";

const DeckHeader: FC = () => {
    const decks = useDeckContext().decks;
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };
    const items = [];
    for (let i = 0; i < width / 326; i++) {
        items.push(<div className={`looped-item`}>11 days / 11 cards of giveaways</div>);
    }

    const content = <div className={`flex mg--3 looped align-center`}>{items}</div>;

    return (
        <>
            <div className={`DeckHeader`}>
                <div className={`mgl-2`}>
                    <h1 className={`flex`}>
                        {decks[0].name}
                        {decks[0].name === "Crypto Edition" && <div className={`nft`}>NFT</div>}
                    </h1>
                    <div className={`description`}>
                        A deck of playing cards featuring works of 55 leading artists.
                        <br /> Unique digital art collectibles living on the Ethereum blockchain.
                    </div>
                    <DeckMenu
                        items={[
                            <>
                                <OpenseaButton className={`openseaBtn h-p`} />
                                <Share className={`h-p`} />
                            </>,
                            "cards",
                            "supply",
                            "stats",
                            "product",
                            "gallery",
                            "roadmap",
                        ]}
                        id="submenu"
                    />
                </div>
            </div>
            <div className={`bg-daysleftCarousel`}>
                <div className={`daysleftCarousel flex mg-1 overflow-hidden relative align-center`}>
                    <div className={`fader`}></div>
                    {content}
                    <div className={`fader tr-180`}></div>
                </div>
            </div>
        </>
    );
};

export default DeckHeader;
