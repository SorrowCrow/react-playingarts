import Insta from "../../public/assets/insta.svg";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

const Gallery = () => {
    const [loading, setloading] = useState(true);
    useEffect(() => {
        setloading(false);
    }, []);

    const ref = useRef(null);

    return (
        <div className={`gallery`} id="gallery">
            <div className={`gallery-header`}>
                <div className={`gallery-header-content flex content-between`}>
                    <h2>Gallery</h2>
                    <a href="" className={`insta flex align-center`}>
                        <Insta />
                        follow
                    </a>
                </div>
            </div>
            {/* <Rerousel itemRef={ref}>
                <Image src="/assets/carousel1.jpg" width="250px" height="250px" ref={ref}/>
                <Image src="/assets/carousel2.jpg" width="250px" height="250px" />
                <Image src="/assets/carousel3.jpg" width="250px" height="250px" />
                <Image src="/assets/carousel4.jpg" width="250px" height="250px" />
                <Image src="/assets/carousel5.jpg" width="250px" height="250px" />
            </Rerousel> */}
            {/* <InfiniteCarousel
                dots={true}
                arrows={true}
                showSides={true}
                sidesOpacity={0.5}
                sideSize={0.1}
                slidesToScroll={1}
                slidesToShow={5}
                scrollOnDevice={true}
            >
                <Image src="/assets/carousel1.jpg" width="250px" height="250px" />
                <Image src="/assets/carousel2.jpg" width="250px" height="250px" />
                <Image src="/assets/carousel3.jpg" width="250px" height="250px" />
                <Image src="/assets/carousel4.jpg" width="250px" height="250px" />
                <Image src="/assets/carousel5.jpg" width="250px" height="250px" />
            </InfiniteCarousel> */}
        </div>
    );
};

export default Gallery;
