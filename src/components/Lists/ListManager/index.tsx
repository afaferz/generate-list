import React from "react";
import { useSearchParams } from 'react-router-dom'
import { PrettyAlertsContext } from "../../../context/PrettyAlertsContext";
import { FormControlLabel, TextField, Checkbox, Button } from "@mui/material";

import PartyList from "../PartyList";
import EventList from "../EventList";
import AttendanceList from "../AttendanceList";

const ListManager: React.FC = () => {
    const { showAlert } = React.useContext(PrettyAlertsContext);
    const [searchParams] = useSearchParams();
    const listType = searchParams.get("type");

    const [listConfigs, setListConfigs] = React.useState<{
        title: string;
        primary_logo: string;
        secondary_logo: string;
        rowsNumber: 0;
        insertNames: false;
        names: string;
        namesArray: string[];
    }>({
        title: "",
        primary_logo: "",
        secondary_logo: "",
        rowsNumber: 0,
        insertNames: false,
        names: "",
        namesArray: [],
    });

    const handleListConfigs = (payload: any) => {
        const [field, value] = payload;
        setListConfigs({ ...listConfigs, [field]: value });
    };
    const handleCreateNames = () => {
        const names = listConfigs.names.split("\n");
        // Verify if rows number match name quantity
        if (names.length < listConfigs.rowsNumber) {
            showAlert({
                message: `Insira todos os nomes. Faltam ${
                    listConfigs.rowsNumber - names.length
                }`,
                type: "warning",
            });
            return;
        }
        setListConfigs({ ...listConfigs, namesArray: names });
        // PrettyAlerts
        showAlert({
            message: "Nomes adicionados a lista",
            type: "success",
        });
    };
    const handleResetNames = () => {
        setListConfigs({ ...listConfigs, namesArray: [] });
        // PrettyAlerts
        showAlert({
            message: "Nomes removidos da lista",
            type: "success",
        });
    };
    return (
        <React.Fragment>
            <div>
                <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    onChange={(e) =>
                        handleListConfigs(["title", e.target.value])
                    }
                />
            </div>
            <div>
                <TextField
                    id="row-number"
                    label="Rows number"
                    variant="outlined"
                    type="number"
                    inputProps={{ min: 0 }}
                    onChange={(e) =>
                        handleListConfigs(["rowsNumber", e.target.value])
                    }
                />
            </div>
            <div>
                <FormControlLabel
                    label="Insert names"
                    control={
                        <Checkbox
                            checked={listConfigs.insertNames}
                            onChange={(e) =>
                                handleListConfigs([
                                    "insertNames",
                                    !listConfigs.insertNames,
                                ])
                            }
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    }
                />
            </div>
            {listConfigs.insertNames && (
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Names"
                        multiline
                        minRows={4}
                        maxRows={10}
                        onChange={(e) =>
                            handleListConfigs(["names", e.target.value])
                        }
                    />
                    <span>
                        Insert values separated by <strong>ENTER</strong>{" "}
                        (breakline)
                    </span>
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={() => handleCreateNames()}
                    >
                        ADD
                    </Button>
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={handleResetNames}
                    >
                        RESET
                    </Button>
                </div>
            )}

            {/* Choose list type */}
            {(function () {
                switch (listType) {
                    case "attendance":
                        return <AttendanceList {...listConfigs} />;
                    case "party":
                        return <PartyList />;
                    case "event":
                        return <EventList />;
                    default:
                        return null;
                }
            })()}
        </React.Fragment>
    );
};

export default ListManager;
