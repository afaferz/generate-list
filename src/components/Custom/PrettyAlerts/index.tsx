import React from "react";
import { AlertBox } from "./styles";
import { Alert, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { PrettyAlertsContext } from "../../../context/PrettyAlertsContext";

const PrettyAlerts: React.FC = () => {
    const { configs, setConfigs } = React.useContext(PrettyAlertsContext);

    const handleCloseAlert = () => {
        setConfigs({ ...configs, show: false });
    };

    setTimeout(() => handleCloseAlert(), 10000);

    const alertType = () => {
        switch (configs.type) {
            case "success":
                return "success";
            case "error":
                return "error";
            case "warning":
                return "warning";
            case "info":
                return "info";
        }
    };
    return (
        <React.Fragment>
            {configs.show && (
                <AlertBox>
                    <Alert
                        color={alertType()}
                        severity={alertType()}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={handleCloseAlert}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        {configs.message}
                    </Alert>
                </AlertBox>
            )}
        </React.Fragment>
    );
};

export default PrettyAlerts;
