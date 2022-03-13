import React from "react";
import { useNavigate } from 'react-router-dom';

const SelectType: React.FC = () => {
    const [listType, setListType] = React.useState<string | null>(null);
    const navigate = useNavigate()

    const redirectToListType = (listType: string) => {
        navigate(`/list?type=${listType}`)
    }

    return (
        <React.Fragment>
            <h2>{listType}</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                    onClick={() => redirectToListType("attendance")}
                    style={{
                        padding: "6em",
                        border: "2px solid red",
                        margin: "1em",
                        cursor: "pointer",
                    }}
                >
                    A
                </div>
                <div
                    onClick={() => redirectToListType("party")}
                    style={{
                        padding: "6em",
                        border: "2px solid red",
                        margin: "1em",
                        cursor: "pointer",
                    }}
                >
                    B
                </div>
                <div
                    onClick={() => redirectToListType("event")}
                    style={{
                        padding: "6em",
                        border: "2px solid red",
                        margin: "1em",
                        cursor: "pointer",
                    }}
                >
                    C
                </div>
            </div>
        </React.Fragment>
    );
};

export default SelectType;
