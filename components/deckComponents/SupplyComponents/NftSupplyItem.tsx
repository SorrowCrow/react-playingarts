import Arrow from "../../../public/assets/arrow.svg";

const NftSuppyItem = ({ items, copies, line = true }) => {
    return (
        <div className={`nftSupply-item ${!line && "total"}`}>
            <div className={`w-100 flex content-between items-center`}>
                <span className={`max-content`}>{items}</span>
                <span className={`max-content items-center flex`}>
                    {copies} Copies
                    <Arrow />
                </span>
            </div>

            {line && (
                <div className={`w-100 line`}>
                    <div></div>
                </div>
            )}
        </div>
    );
};
export default NftSuppyItem;
