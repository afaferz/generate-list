import React from "react";

interface PrettyAlertsConfig {
    show: boolean;
    message: string;
    type: "success" | "error" | "warning" | "info";
}

interface IPrettyAlertsContext {
    configs: PrettyAlertsConfig;
    setConfigs: React.Dispatch<React.SetStateAction<PrettyAlertsConfig>>;
    showAlert: ({
        message,
        type,
    }: {
        message: string;
        type: "success" | "error" | "warning" | "info";
    }) => void;
}

export const PrettyAlertsContext = React.createContext<IPrettyAlertsContext>({
    configs: {
        show: false,
        message: "",
        type: "error",
    },
    setConfigs: () => {},
    showAlert: () => {},
});

export const PrettyAlertsStorage: React.FC = ({ children }) => {
    const [configs, setConfigs] = React.useState<PrettyAlertsConfig>({
        show: false,
        message: "",
        type: "error",
    });

    const showAlert = ({
        message,
        type,
    }: {
        message: string;
        type: "success" | "error" | "warning" | "info";
    }) => {
        setConfigs({ show: true, message, type });
    };

    return (
        <PrettyAlertsContext.Provider
            value={{ configs, setConfigs, showAlert }}
        >
            {children}
        </PrettyAlertsContext.Provider>
    );
};
