import { FC, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as MenuSvg } from "../assets/menu.svg";
import { ReactComponent as Shop } from "../assets/shop.svg";
import { useDeckContext } from "./DeckContext";

const Menu: FC = () => {
    const deckId = useDeckContext().deckId;
    const decks = useDeckContext().decks;

    let lastScrollTop: number;

    useEffect(() => {
        window.addEventListener(
            "scroll",
            function () {
                var st = window.pageYOffset || document.documentElement.scrollTop;
                const element = document.getElementById("sub-menu");

                if (st > lastScrollTop && element !== null && st !== null) {
                    element.style.bottom = "100%";
                } else if (element !== null && st !== null) {
                    element.style.bottom = "0";
                }
                lastScrollTop = st;
            },
            false
        );
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
        <header className={`header fixed overflow-hidden`}>
            <div className={`flex content-between main-menu`}>
                <div className={`flex menu`}>
                    <MenuSvg className="menuSvg h-p" onMouseLeave={menuOut} onMouseEnter={menuHover} fill={`white`} />
                    <div className={`align-self-center`}>PLAYING ARTS</div>
                </div>
                <Logo fill="white" className={`align-self-center`} />
                <Shop className={`h-p shop`} fill={`purple`} />
            </div>
            <div className={`flex content-center sub-menu relative`} id={`sub-menu`}>
                <div className={`items flex`}>
                    <div className={`item h-p`}>ZERO</div>
                    <div className={`item h-p`}>ONE</div>
                    <div className={`item h-p`}>TWO</div>
                    <div className={`item h-p`}>THREE</div>
                    <div className={`item h-p`}>SPECIAL</div>
                    <div className={`item h-p`}>FUTURE</div>
                    <div className={`item h-p ${decks[0].name === "Crypto Edition" ? "activated" : ""}`}>CRYPTO</div>
                </div>
            </div>
        </header>
    );
};

export default Menu;
