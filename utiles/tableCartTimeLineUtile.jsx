import {TableCardColumn, TableCartTimeDie, TableCartTimeDieCircle,} from "../styled/tableCard";
import React from "react";

export function TableCartDie() {
    return(
        <TableCardColumn>
            <TableCartTimeDieCircle/>
            <TableCartTimeDie/>
        </TableCardColumn>
    )
}