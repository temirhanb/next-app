import {TableCardColumn, TableCardRow} from "../../styled/tableCard";
import {TableCardUserComponent} from "./TableCardUserComponent";
import {TableCardFreedomTime} from "./TableCardFreedomTime";
import React from "react";
import {LastColumn} from "../../utiles/lastColumn";

export function TableTuesday() {
    return (
        <TableCardRow>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardColumn>
                <TableCardUserComponent
                    color={'#52AD5B;'}
                    width={'67px'}
                    name={'Тельнова Злата'}
                    borderHeight={'70px'}
                    borderBottom={'0'}
                    border={'none'}
                />
                <TableCardFreedomTime
                    color={'#FE8900;'}
                    position={'-1.5px'}
                    width={'70px'}
                    border={'none'}
                    first
                    positionLeft={'-1.5px'}
                />
            </TableCardColumn>
            <TableCardFreedomTime
                color={'#FE8900;'}
                position={'75px'}
                width={'70px'}
                positionLeft={'75px'}
            />
            <TableCardFreedomTime
                color={'#FE8900;'}
                position={'75px'}
                width={'70px'}
                positionLeft={'75px'}
            />
            <TableCardColumn>
                <TableCardUserComponent
                    color={'#52AD5B;'}
                    width={'67px'}
                    name={'Ксения Аксерова, 9 лет'}
                    borderHeight={'70px'}
                    borderBottom={'5px'}
                    border={'none'}
                    last
                />
                <TableCardFreedomTime
                    color={'#FE8900;'}
                    position={'-1.5px'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'-1.5px'}
                />
            </TableCardColumn>
            <TableCardFreedomTime
                color={'#FE8900;'}
                position={'75px'}
                width={'70px'}
                positionLeft={'75px'}
            />
            <TableCardFreedomTime
                color={'#FE8900;'}
                position={'75px'}
                width={'70px'}
                positionLeft={'75px'}
                last
            />
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <LastColumn/>
        </TableCardRow>
    )
}