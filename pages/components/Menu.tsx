import { FC, useEffect, useState } from "react";
import Logo from "../public/assets/logo.svg";
import MenuSvg from "../public/assets/menu.svg";
import Bag from "../public/assets/bag.svg";
import DeckMenu from "./deckComponents/DeckMenu";
import { useDeckContext } from "../DeckContext";
import React from "react";

const Menu: FC = () => {
    const deckId = useDeckContext().deckId;
    const decks = useDeckContext().decks;
    const setdeckId = useDeckContext().setdeckId;
    const [playingarts, setplayingarts] = useState("PLAYING ARTS");

    useEffect(() => {
        let lastScrollTop: number;

        window.addEventListener(
            "scroll",
            () => {
                var st = window.pageYOffset || document.documentElement.scrollTop;
                const element = document.getElementById("sub-menu");

                if (st > lastScrollTop && element !== null && st !== null) {
                    element.style.bottom = "4.375rem";
                } else if (element !== null && st !== null) {
                    element.style.bottom = "0";
                }
                lastScrollTop = st;
            },
            false
        );
    }, []);

    useEffect(() => {
        const logo = document.getElementById("logo");
        const submenuElement = document.getElementById("submenu");
        const currentdeck = document.getElementById("currentdeck");
        const cardsElement = document.getElementById("cards");
        const deckMenu_cards = document.getElementById("deckMenu_cards");
        let submenuSet = false;
        function listener() {
            if (
                !deckMenu_cards?.classList.contains("active") &&
                cardsElement?.offsetTop !== undefined &&
                cardsElement?.offsetTop - (window.pageYOffset + 141) < 0
            ) {
                deckMenu_cards !== null && deckMenu_cards.classList.add("active");
            } else if (
                deckMenu_cards?.classList.contains("active") &&
                cardsElement?.offsetTop !== undefined &&
                cardsElement?.offsetTop - (window.pageYOffset + 141) > 0
            ) {
                deckMenu_cards !== null && deckMenu_cards.classList.remove("active");
            }
            if (
                !submenuSet &&
                submenuElement?.offsetTop !== undefined &&
                submenuElement?.offsetTop - window.pageYOffset < 0
            ) {
                decks[0].name && setplayingarts(decks[0].name);
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
    }, [deckId, decks]);

    function menuHover(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        // e.currentTarget.style.background = "white";
        // e.currentTarget.style.fill = "purple";
    }
    function menuOut(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        // e.currentTarget.style.background = "";
        // e.currentTarget.style.fill = "";
    }

    return (
        <header className={`header fixed overflow-hidden`}>
            <div className={`flex content-between main-menu overflow-hidden`}>
                <div className={`flex menu`}>
                    <a href="" className={`h-p`}>
                        <MenuSvg
                            className="menuSvg relative align-self-center"
                            onMouseLeave={menuOut}
                            onMouseEnter={menuHover}
                            fill={`white`}
                        />
                    </a>
                    <div className={`currentDeck relative`} id="currentdeck">
                        <div className={`flex align-center company`}>PLAYING ARTS</div>
                        <div className={`flex align-center deck`}>{playingarts}</div>
                    </div>
                </div>
                <div className={`absolute w-100 flex flex-column logoContainer content-center align-center`} id="logo">
                    <div className={`h-100 flex`}>
                        <Logo className={`align-self-center logo`} />
                    </div>
                    <DeckMenu
                        id=""
                        items={["cards", "supply", "stats", "product", "gallery", "roadmap"]}
                        onClick={true}
                    />
                </div>
                <a href="" className={`shop h-p align-center flex`}>
                    {/* <Shop className={`h-p shop`} fill={`#510eac`} /> */}
                    <Bag />
                    shop
                </a>
            </div>
            <div className={`overflow-hidden sub-menu-container`}>
                <div className={`flex content-center sub-menu relative`} id={`sub-menu`}>
                    <div className={`items flex`}>
                        <div className={`item h-p ${deckId === 0 ? "activate" : ""}`} onClick={() => setdeckId(0)}>
                            ZERO
                        </div>
                        <div className={`item h-p ${deckId === 1 ? "activate" : ""}`} onClick={() => setdeckId(1)}>
                            ONE
                        </div>
                        <div className={`item h-p ${deckId === 2 ? "activate" : ""}`} onClick={() => setdeckId(2)}>
                            TWO
                        </div>
                        <div className={`item h-p ${deckId === 3 ? "activate" : ""}`} onClick={() => setdeckId(3)}>
                            THREE
                        </div>
                        <div className={`item h-p ${deckId === 4 ? "activate" : ""}`} onClick={() => setdeckId(4)}>
                            SPECIAL
                        </div>
                        <div className={`item h-p ${deckId === 5 ? "activate" : ""}`} onClick={() => setdeckId(5)}>
                            FUTURE
                        </div>
                        <div className={`item h-p ${deckId === 6 ? "activate" : ""}`} onClick={() => setdeckId(6)}>
                            CRYPTO
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Menu;
