import React, { useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { ListPage, ListHeader, ListSubheader, ListTable } from "./styles";

interface ListConfigProps {
    title: string;
    primary_logo?: string;
    secondary_logo?: string;
    rowsNumber: number | string;
    insertNames: boolean;
    namesArray: string[];
}

const AttendanceList: React.FC<ListConfigProps> = ({
    title,
    primary_logo,
    secondary_logo,
    rowsNumber,
    namesArray,
}) => {
    const parseNumberRowsNumber = Number(rowsNumber);
    const totalRows = Array.from(
        { length: parseNumberRowsNumber },
        (_, i) => i + 1
    );
    const totalSheets =
        parseNumberRowsNumber !== 0 ? Math.ceil(parseNumberRowsNumber / 30) : 1;
    const sheetToCreate = [];
    const [currentSheet, setCurrentSheet] = useState(1);

    for (let sheet = 0; sheet < totalSheets; sheet++) {
        const actualSheet = sheet + 1;
        const sliceSheets = totalRows.slice(
            (actualSheet - 1) * 30,
            actualSheet * 30
        );

        sheetToCreate.push(sliceSheets);
    }
    return (
        <>
            {sheetToCreate.map((item, i) => {
                return (
                    <>
                        <ListPage
                            isVisible={currentSheet === i + 1}
                            key={`page + ${i}`}
                        >
                            <ListHeader>
                                <div className="logo__box">
                                    <img src={primary_logo} alt="" />
                                </div>
                                <h4>{title ? title : "Your title here"}</h4>
                                <div className="logo__box">
                                    <img src={secondary_logo} alt="" />
                                </div>
                            </ListHeader>
                            <ListSubheader>
                                <div className="subheader__item institution">
                                    <span className="subheader__label">
                                        INSTITUTION:
                                    </span>
                                </div>
                                <div className="subheader__item departament">
                                    <span className="subheader__label">
                                        DEPARTAMENT:
                                    </span>
                                </div>
                                <div className="subheader__item event">
                                    <span className="subheader__label">
                                        EVENT:
                                    </span>
                                </div>
                                <div className="subheader__item date">
                                    <span className="subheader__label">
                                        DATE:
                                    </span>
                                </div>
                                <div className="subheader__item shift">
                                    <span className="subheader__label">
                                        SHIFT:
                                    </span>
                                </div>
                            </ListSubheader>
                            <ListTable>
                                <thead>
                                    <tr>
                                        <th>Nº</th>
                                        <th>Name</th>
                                        <th>Assign</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.map((n) => {
                                        return (
                                            <tr key={n}>
                                                <td>{n <= 9 ? `0${n}` : n}</td>
                                                <td>{namesArray[n - 1]}</td>
                                                <td></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </ListTable>
                            <div className="page-number__box">
                                <span className="page-number__number">Page {i + 1}</span>
                            </div>
                        </ListPage>
                    </>
                );
            })}
            <Pagination
                count={totalSheets}
                page={currentSheet}
                variant="outlined"
                shape="rounded"
                onChange={(_, page) => setCurrentSheet(page)}
            />
        </>
    );
};

export default AttendanceList;
