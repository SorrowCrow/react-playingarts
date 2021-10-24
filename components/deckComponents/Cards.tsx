import React, { FC } from "react";
import Plus from "../../public/assets/plus.svg";
import Card from "./CardsComponents/Card";

const Cards: FC = () => {
    const listjpg = [
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/2-c-jpi8Q728.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/2-d-QK444t2B.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/2-h-4si4nh43.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/2-s-7Tw67g2w.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/3-c-74h8P8ea.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/3-d-49uM72Vj.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/3-h-4J4x76NB.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/3-s-i8m8y6K6.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/4-c-977Jh2ML.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/4-d-9Egv9F37.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/4-h-sB7393iz.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/4-s-23Yoz7D8.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/5-c-k44Q6m9v.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/5-d-2Yb48c3D.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/5-h-4zt6a92h.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/5-s-gd8kN968.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/6-c-in3B49g6.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/6-d-6mH3F99H.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/6-h-8d9idu23.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/6-s-sx39U4U8.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/7-c-D8q934nr.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/7-d-3H4G33ZA.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/7-h-XW4Qx464.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/7-s-4293BgEn.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/8-c-cZ76N43Z.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/8-d-6Z3H92Kv.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/8-h-V3AR64f2.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/8-s-n2B4b6T3.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/9-c-y6x3v47U.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/9-d-8w3v6JM6.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/9-h-Hj4nb676.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/9-s-g43c26dj.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/10-c-okp7333D.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/10-d-49RMR27K.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/10-h-383VH3zR.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/10-s-239yn6fp.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/j-c-93y2dRL8.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/j-d-X37rjw98.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/j-h-2H49J7bj.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/j-s-3NE4b2t4.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/q-c-jE72m69y.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/q-d-4N4a42sM.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/q-h-9m4cg37g.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/q-s-4F8hN98q.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/k-c-w47o9Vp8.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/k-d-9ex8HW27.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/k-h-36QTB8R9.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/k-s-b2dD263P.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/a-c-R22N86fN.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/a-d-Mk33LV47.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/a-h-x89CxW27.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/a-s-26vr86EL.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/joker-PQy3C426.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/joker2-aB2fC925.jpg",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/back-iV67Z67p.jpg",
    ];
    const listmp4 = [
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/2-d-QK444t2B.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/2-d-QK444t2B.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/2-h-4si4nh43.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/2-s-7Tw67g2w.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/3-c-74h8P8ea.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/3-d-49uM72Vj.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/3-h-4J4x76NB.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/3-s-i8m8y6K6.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/4-c-977Jh2ML.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/4-d-9Egv9F37.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/4-h-sB7393iz.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/4-s-23Yoz7D8.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/5-c-k44Q6m9v.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/5-d-2Yb48c3D.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/5-h-4zt6a92h.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/5-s-gd8kN968.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/6-c-in3B49g6.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/6-d-6mH3F99H.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/6-h-8d9idu23.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/6-s-sx39U4U8.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/7-c-D8q934nr.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/7-d-3H4G33ZA.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/7-h-XW4Qx464.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/7-s-4293BgEn.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/8-c-cZ76N43Z.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/8-d-6Z3H92Kv.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/8-h-V3AR64f2.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/8-s-n2B4b6T3.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/9-c-y6x3v47U.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/9-d-8w3v6JM6.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/9-h-Hj4nb676.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/9-s-g43c26dj.mp4?3?3",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/10-c-okp7333D.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/10-d-49RMR27K.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/10-h-383VH3zR.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/10-s-239yn6fp.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/j-c-93y2dRL8.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/j-d-X37rjw98.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/j-h-2H49J7bj.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/j-s-3NE4b2t4.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/q-c-jE72m69y.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/q-d-4N4a42sM.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/q-h-9m4cg37g.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/q-s-4F8hN98q.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/k-c-w47o9Vp8.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/k-d-9ex8HW27.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/k-h-36QTB8R9.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/k-s-b2dD263P.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/a-c-R22N86fN.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/a-d-Mk33LV47.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/a-h-x89CxW27.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/a-s-26vr86EL.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/joker-PQy3C426.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/joker2-aB2fC925.mp4",
        "https://s3.amazonaws.com/img.playingarts.com/crypto/cards/back-iV67Z67p.mp4",
    ];
    return (
        <div className={`cards pg-1 mx-auto`} id="cards">
            <div className={`cards-header`}>
                <h2>Cards</h2>
                <div className={`flex description-container content-between`}>
                    <div className={`description`}>
                        Hover the card to see animation. Click to read the story behind the artwork.
                    </div>
                    <a href="" className={`metamask h-p align-center flex`}>
                        <Plus />
                        metamask
                    </a>
                </div>
            </div>
            <div className={`cards-deck `}>
                <div className={`cards-deck-content flex flex-wrap content-center`}>
                    {listjpg.map((item: string, index) => (
                        <Card url={item} mp4url={listmp4[index]} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
