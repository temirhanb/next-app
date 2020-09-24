import React from "react";
import {TableCardBorder, TableCardColumn, TableCardFreedom} from "../../styled/tableCard";

export function TableCardFreedomTime({height,first,last,border, color, position, positionLeft, width, bottom}) {
    return (
        <TableCardColumn
            border={border}
        >
            <TableCardBorder
                color={color}
                position={position}
                height={height}
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