import "./App.css";
import Calculator from "./Calculator";
import { BillProvider } from "./Contexts/BillContext";
import { PeopleProvider } from "./Contexts/PeopleContext";
import { TipProvider } from "./Contexts/TipContext";
//deployment subfolder
// https://stackoverflow.com/questions/51918854/how-to-deploy-create-react-app-to-gh-pages-subfolder

function App() {
    return (
        <div className="App">
            <h1 className="App-headline">
                SPLI <br /> TTER
            </h1>
            <BillProvider>
                <TipProvider>
                    <PeopleProvider>
                        <Calculator />
                    </PeopleProvider>
                </TipProvider>
            </BillProvider>
        </div>
    );
}

export default App;
