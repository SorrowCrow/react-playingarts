import { FC, useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as MenuSvg } from "../assets/menu.svg";
import { ReactComponent as Shop } from "../assets/shop.svg";
import DeckMenu from "./deckComponents/DeckMenu";
import { useDeckContext } from "./DeckContext";

const Menu: FC = () => {
    const deckId = useDeckContext().deckId;
    const decks = useDeckContext().decks;
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
        console.log(submenuElement?.offsetTop);
        function listener() {
            if (cardsElement?.offsetTop !== undefined && cardsElement?.offsetTop - (window.pageYOffset + 141) < 0) {
                deckMenu_cards !== null && deckMenu_cards.classList.add("active");
            } else if (
                submenuElement?.offsetTop !== undefined &&
                submenuElement?.offsetTop - (window.pageYOffset + 30) < 0
            ) {
                decks[0].name && setplayingarts(decks[0].name);
                logo !== null && (logo.style.marginTop = "-5rem");
                currentdeck !== null && (currentdeck.style.top = "-4.375rem");
                deckMenu_cards !== null && deckMenu_cards.classList.remove("active");
            } else if (
                submenuElement?.offsetTop !== undefined &&
                submenuElement?.offsetTop - (window.pageYOffset + 30) > 0
            ) {
                logo !== null && (logo.style.marginTop = "");
                currentdeck !== null && (currentdeck.style.top = "0");
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
                    <a href="">
                        <MenuSvg
                            className="menuSvg h-p relative"
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
                    <Logo className={`align-self-center logo h-100 relative`} />
                    <DeckMenu id="" items={["cards", "supply", "stats", "product", "gallery", "roadmap"]} />
                </div>
                <a href="">
                    <Shop className={`h-p shop`} fill={`#510eac`} />
                </a>
            </div>
            <div className={`overflow-hidden sub-menu-container`}>
                <div className={`flex content-center sub-menu relative`} id={`sub-menu`}>
                    <div className={`items flex`}>
                        <div className={`item h-p`}>ZERO</div>
                        <div className={`item h-p`}>ONE</div>
                        <div className={`item h-p`}>TWO</div>
                        <div className={`item h-p`}>THREE</div>
                        <div className={`item h-p`}>SPECIAL</div>
                        <div className={`item h-p`}>FUTURE</div>
                        <div className={`item h-p ${decks[0].name === "Crypto Edition" ? "activate" : ""}`}>CRYPTO</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Menu;
