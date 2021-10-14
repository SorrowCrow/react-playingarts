import "./scss/main.scss";
// const Menu = import("./components/Menu");
import Menu from "./components/Menu";
import DeckHeader from "./components/headerComponents/DeckHeader";
import Cards from "./components/deckComponents/Cards";

function App() {
    return (
        <>
            <Menu />
            <DeckHeader />
            <Cards />
        </>
    );
}

export default App;
