// import Image from "next/image";
import React, { Suspense } from "react";
import { useEffect, useState } from "react";
// const Image = React.lazy(() => import("./Image"));
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
    url: string;
    mp4url: string;
}
const myLoader = ({ src }) => {
    return `${src}`;
};

const Card = ({ url, mp4url }: Props) => {
    const [hover, sethover] = useState(false);
    // useEffect(() => {
    //     console.log(hover);
    // }, [hover]);
    return (
        <div className={`item h-p`}>
            <div
                className={`artwork relative`}
                onMouseEnter={() => sethover(!hover)}
                onMouseLeave={() => sethover(!hover)}
            >
                {/* {hover && (
                    <video loop muted playsInline preload="metadata" className="w-100 h-100" style={{ zIndex: 100 }}>
                        <source src={mp4url} type="video/mp4" />
                    </video>
                )} */}
                {/* <Image loader={myLoader} src={url} layout="fill" /> */}
                <LazyLoadImage src={url} effect="opacity" />
            </div>
            <div className={`author`}>Igor Šćekić</div>
        </div>
    );
};

export default Card;
