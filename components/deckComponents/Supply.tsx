import NftSuppyItem from "./SupplyComponents/NftSupplyItem";
import Android from "../../public/assets/android.svg";
import Apple from "../../public/assets/apple.svg";

const Supply = ({ deck }) => {
    return (
        <div className={`supply`} id="supply">
            <div className={`content flex flex-wrap content-center`}>
                {deck.id === 6 && (
                    <div className={`nftSupply supply-item`}>
                        <h5>nft supply</h5>
                        <NftSuppyItem items={`2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A`} copies={`150`} />
                        <NftSuppyItem items={`Backside`} copies={`33`} />
                        <NftSuppyItem items={`Red & Black Jokers`} copies={`15`} />
                        <NftSuppyItem items={`Diamond Backside`} copies={`7`} />
                        <NftSuppyItem items={`Total Cards Issued`} copies={`7,830`} line={false} />
                    </div>
                )}
                <div className={`augmentedReality supply-item`}>
                    <h5>AUGMENTED REALITY</h5>
                    <p>Hover the card to see animation. Click to read the story behind the artwork.</p>
                    <a href="" className={`augmentedReality-button content-center flex`}>
                        Download
                    </a>
                    <div className={`flex symbols content-between`}>
                        <Android />
                        <Apple />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Supply;
