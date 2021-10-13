import "./scss/main.scss";
// const Menu = import("./components/Menu");
import Menu from "./components/Menu";
import DeckHeader from "./components/headerComponents/DeckHeader";
import DeckContext from "./components/DeckContext";
import Cards from "./components/deckComponents/Cards";

function App() {
    return (
        <>
            <DeckContext>
                <Menu />
                <DeckHeader />
                <Cards />
            </DeckContext>
        </>
    );
}

export default App;
