// import Image from "next/image";
import React, { Suspense } from "react";
import { useEffect, useState } from "react";
// const Image = React.lazy(() => import("./Image"));
import { LazyLoadImage } from "react-lazy-load-image-component";
import Diamonds from "../../../public/assets/diamonds.svg";

const Card = ({ item }) => {
    const [hover, sethover] = useState(false);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        setloading(true);
    }, [item.url]);
    return (
        <div className={`item h-p`}>
            <div className={`artwork-cover`}>
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
                    {loading && (
                        <div
                            id="loader"
                            style={{
                                transition: "0.75s",
                                background: "#EAEAEA",
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                opacity: "1",
                                zIndex: 1,
                            }}
                        >
                            {/* <div style={{ position: "fixed", left: "-50px", fontFamily: "aldrich" }}>.</div> */}
                            <Diamonds style={{ margin: "auto", animation: "2s linear infinite loader" }} />
                        </div>
                    )}
                    <LazyLoadImage
                        src={item.url.includes(".gif") ? item.url : item.url + ".jpg"}
                        effect="opacity"
                        onLoad={(e) => {
                            e.target.src.indexOf("data:image/gif;base64") < 0 && setloading(false);
                        }}
                    />
                    {/* .mp4?3?3 */}
                </div>
            </div>
            <div className={`author`}>{item.author}</div>
            <div className={`name`}>{item.name}</div>
        </div>
    );
};

export default Card;
