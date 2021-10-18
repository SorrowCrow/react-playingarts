import { FC } from "react";

const Card: FC = () => {
    return (
        <div className={`item`}>
            <div className={`artwork`}></div>
            <div className={`author`}></div>
        </div>
    );
};

export default Card;
