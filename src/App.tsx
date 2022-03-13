import React from "react";
import SelectListType from "./components/Lists/SelectListType";
import PrettyAlerts from "./components/Custom/PrettyAlerts";
import { Container } from "./app-styles";
import { PrettyAlertsStorage } from "./context/PrettyAlertsContext";

function App() {
    return (
        <>
            <PrettyAlertsStorage>
                <Container>
                    <SelectListType />
                </Container>
                <PrettyAlerts />
            </PrettyAlertsStorage>
        </>
    );
}

export default App;
