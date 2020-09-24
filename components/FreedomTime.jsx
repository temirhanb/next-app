import React from "react";
import {TableDie, TableDiv, TableTd} from "../pages";

export function FreedomTime({borderColor, backgroundColor, last, width}) {
    console.log(borderColor)
    return (
        <TableTd
            width={width}
        >
            <TableDie
                background={borderColor}
            />
            <TableDiv
                width={width}
                background={backgroundColor}
                opacity={.1}
                last={last}
            >
            </TableDiv>
        </TableTd>
    )
}