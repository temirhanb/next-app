import {TableCardBorderUser, TableCardCell, TableCardColumn, TableCardSpan, TableCardUser} from "../../styled/tableCard";
import React from "react";

export function TableCardUserComponent({borderBottom,borderHeight,border,last, name, width, color}) {
    return (
        <TableCardColumn
            border={border}
        >
            <TableCardBorderUser
                color={color}
                last={last}
                borderHeight={borderHeight}
                borderBottom={borderBottom}
                long
            >
            </TableCardBorderUser>
            <TableCardCell
                width={width}
                long
                color={color}
            >
                <TableCardUser>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M3.20811 7.33353H7.79144C9.0571 7.33353 10.0831 8.35954 10.0831 9.62519C10.0831 9.87832 9.87791 10.0835 9.62478 10.0835C9.38973 10.0835 9.196 9.90659 9.16953 9.67864L9.16411 9.5444C9.12384 8.84935 8.56729 8.2928 7.87223 8.25253L7.79144 8.25019H3.20811C2.44872 8.25019 1.83311 8.8658 1.83311 9.62519C1.83311 9.87832 1.62791 10.0835 1.37478 10.0835C1.12165 10.0835 0.916443 9.87832 0.916443 9.62519C0.916443 8.39285 1.88917 7.38769 3.1087 7.33564L3.20811 7.33353H7.79144H3.20811ZM5.5 0.916748C7.01878 0.916748 8.25 2.14796 8.25 3.66675C8.25 5.18553 7.01878 6.41675 5.5 6.41675C3.98122 6.41675 2.75 5.18553 2.75 3.66675C2.75 2.14796 3.98122 0.916748 5.5 0.916748ZM5.49978 1.83353C4.48725 1.83353 3.66644 2.65434 3.66644 3.66686C3.66644 4.67938 4.48725 5.50019 5.49978 5.50019C6.5123 5.50019 7.33311 4.67938 7.33311 3.66686C7.33311 2.65434 6.5123 1.83353 5.49978 1.83353Z"
                              fill="black"/>
                    </svg>
                    <TableCardSpan>{name}</TableCardSpan>
                </TableCardUser>
            </TableCardCell>
        </TableCardColumn>
    )
}