import { useEffect } from "react";
import Logo from "../public/assets/logo.svg";
import MenuSvg from "../public/assets/menu.svg";
import DeckMenu from "./deckComponents/DeckMenu";
import React from "react";
import Plus from "../public/assets/plus2.svg";
import Link from "next/link";

const Menu = ({
    deck = undefined,
    menustyle,
    logomenubuttonfill = { fill: "white" },
    logocolor = "white",
    metamasktextclass = "ethBackground",
    metamaskbackground = "black",
}) => {
    const deckId = deck && deck.id;

    useEffect(() => {
        if (!deck) return;
        const logo = document.getElementById("logo");
        const submenuElement = document.getElementById("submenu");
        const currentdeck = document.getElementById("currentdeck");

        let submenuSet = false;

        const elements = [
            document.getElementById("cards"),
            document.getElementById("supply"),
            document.getElementById("gallery"),
        ];
        const deckMenu_elements = [
            document.getElementById("deckMenu_cards"),
            document.getElementById("deckMenu_supply"),
            document.getElementById("deckMenu_gallery"),
        ];
        let lastScrollTop: number;

        function listener() {
            let done = false;
            var st = window.pageYOffset || document.documentElement.scrollTop;
            const element = document.getElementById("sub-menu");

            if (st > lastScrollTop && element !== null && st !== null) {
                element.style.bottom = "4.375rem";
            } else if (element !== null && st !== null) {
                element.style.bottom = "0";
            }
            lastScrollTop = st;
            if (elements[0]?.offsetTop !== undefined && elements[0]?.offsetTop > window.pageYOffset + 141) {
                for (let bindex = 0; bindex < elements.length; bindex++) {
                    deckMenu_elements[bindex].classList.remove("active");
                }
                done = true;
            }
            if (!done) {
                for (let index = 0; index < elements.length; index++) {
                    if (
                        elements[index]?.offsetTop !== undefined &&
                        elements[index]?.offsetTop < window.pageYOffset + 141 &&
                        elements[index + 1]?.offsetTop !== undefined &&
                        elements[index + 1]?.offsetTop > window.pageYOffset + 141
                    ) {
                        deckMenu_elements[index - 1] !== undefined &&
                            deckMenu_elements[index - 1].classList.remove("active");
                        deckMenu_elements[index].classList.add("active");
                        deckMenu_elements[index + 1].classList.remove("active");
                        done = true;
                    }
                }
            }
            if (!done) {
                if (
                    elements[elements.length - 1]?.offsetTop !== undefined &&
                    elements[elements.length - 1]?.offsetTop < window.pageYOffset + 141
                ) {
                    deckMenu_elements[elements.length - 2].classList.remove("active");
                    deckMenu_elements[elements.length - 1].classList.add("active");
                    done = true;
                }
            }

            if (
                !submenuSet &&
                submenuElement?.offsetTop !== undefined &&
                submenuElement?.offsetTop - window.pageYOffset < 0
            ) {
                logo !== null && (logo.style.marginTop = "-80px");
                currentdeck !== null && (currentdeck.style.top = "-70px");
                submenuSet = !submenuSet;
            } else if (
                submenuSet &&
                submenuElement?.offsetTop !== undefined &&
                submenuElement?.offsetTop - window.pageYOffset > 0
            ) {
                logo !== null && (logo.style.marginTop = "");
                currentdeck !== null && (currentdeck.style.top = "0");
                submenuSet = !submenuSet;
            }
        }

        window.addEventListener("scroll", listener, false);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    function menuHover(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        // e.currentTarget.style.background = "white";
        // e.currentTarget.style.fill = "purple";
    }
    function menuOut(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        // e.currentTarget.style.background = "";
        // e.currentTarget.style.fill = "";
    }

    return (
        <>
            <header className={`header fixed `}>
                <div className={`header-content overflow-hidden relative`}>
                    <div className={`flex content-between main-menu overflow-hidden`} style={menustyle}>
                        <div className={`flex menu`}>
                            <a href="" className={`h-p`}>
                                <MenuSvg
                                    className="menuSvg relative align-self-center"
                                    onMouseLeave={menuOut}
                                    onMouseEnter={menuHover}
                                    style={logomenubuttonfill}
                                />
                            </a>
                            <div className={`currentDeck relative`} id="currentdeck" style={{ color: logocolor }}>
                                <div className={`flex align-center company`}>PLAYING ARTS</div>
                                {deck && <div className={`flex align-center deck`}>{deck.name}</div>}
                            </div>
                        </div>
                        <div
                            className={`absolute w-100 flex flex-column logoContainer content-center align-center`}
                            id="logo"
                        >
                            <div className={`h-100 flex`}>
                                <Logo style={logomenubuttonfill} className={`align-self-center logo`} />
                            </div>
                            <DeckMenu
                                id=""
                                items={["cards", "supply", "stats", "product", "gallery", "roadmap"]}
                                onClick={true}
                            />
                        </div>
                        <a href="" style={{ background: metamaskbackground }} className={`shop h-p align-center flex`}>
                            {/* <Shop className={`h-p shop`} fill={`#510eac`} /> */}
                            <Plus />
                            <div className={`flex ${metamasktextclass}`}>metamask</div>
                        </a>
                    </div>
                    {deck && (
                        <div className={`overflow-hidden sub-menu-container`}>
                            <div className={`flex content-center sub-menu relative`} id={`sub-menu`}>
                                <div className={`items flex`}>
                                    <Link href="/zero">
                                        <div className={`item h-p ${deckId === 0 ? "activate" : ""}`}>ZERO</div>
                                    </Link>
                                    <Link href="/one">
                                        <div className={`item h-p ${deckId === 1 ? "activate" : ""}`}>ONE</div>
                                    </Link>
                                    <Link href="/two">
                                        <div className={`item h-p ${deckId === 2 ? "activate" : ""}`}>TWO</div>
                                    </Link>
                                    <Link href="/three">
                                        <div className={`item h-p ${deckId === 3 ? "activate" : ""}`}>THREE</div>
                                    </Link>
                                    <Link href="/special">
                                        <div className={`item h-p ${deckId === 4 ? "activate" : ""}`}>SPECIAL</div>
                                    </Link>
                                    <Link href="/future">
                                        <div className={`item h-p ${deckId === 5 ? "activate" : ""}`}>FUTURE</div>
                                    </Link>
                                    <Link href="/crypto">
                                        <div className={`item h-p ${deckId === 6 ? "activate" : ""}`}>CRYPTO</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            {/* <Deck /> */}
        </>
    );
};

export default Menu;
