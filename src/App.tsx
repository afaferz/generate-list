import ListManager from "./components/Lists/ListManager";
import SelectType from "./components/Lists/SelectType";
import PrettyAlerts from "./components/Custom/PrettyAlerts";
import { Container } from "./app-styles";
import { PrettyAlertsStorage } from "./context/PrettyAlertsContext";

function App() {
    return (
        <PrettyAlertsStorage>
            <Container>
                <SelectType />
            </Container>
            <PrettyAlerts />
        </PrettyAlertsStorage>
    );
}

export default App;
