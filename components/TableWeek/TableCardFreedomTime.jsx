import React from "react";
import {TableCardBorder, TableCardColumn, TableCardFreedom} from "../../styled/tableCard";

export function TableCardFreedomTime({first,last,border, color, position, positionLeft, width, bottom}) {
    return (
        <TableCardColumn
            border={border}
        >
            <TableCardBorder
                color={color}
                position={position}
                bottom={bottom}
                first={first}
                last={last}
            >
            </TableCardBorder>
            <TableCardFreedom
                color={color}
                width={width}
                positionLeft={positionLeft}
                bottom={bottom}
            >
            </TableCardFreedom>
        </TableCardColumn
        >
    )
}