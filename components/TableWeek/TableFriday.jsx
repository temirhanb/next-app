import {TableCardColumn, TableCardRow} from "../../styled/tableCard";
import {TableCardUserComponent} from "./TableCardUserComponent";
import {TableCardFreedomTime} from "./TableCardFreedomTime";
import React from "react";
import {LastColumn} from "../../utiles/lastColumn";

export function TableFriday() {
    return (
        <TableCardRow>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardColumn>
                <TableCardFreedomTime
                    first
                    color={'#52AD5B;'}
                    position={'0'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'0'}
                />
                <TableCardFreedomTime
                    first
                    color={'#2E71F3'}
                    position={'0'}
                    width={'68px'}
                    border={'none'}
                    height={'26px'}
                    positionLeft={'0'}
                />
            </TableCardColumn>
            <TableCardColumn>
                <TableCardFreedomTime
                    color={'#52AD5B;'}
                    position={'0'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'0'}
                />
                <TableCardUserComponent
                    color={'#2E71F3'}
                    width={'67px'}
                    name={'Тельнова Злата'}
                    borderHeight={'71px'}
                    borderBottom={'0'}
                    border={'none'}
                    last
                />
            </TableCardColumn>
            <TableCardColumn>
                <TableCardFreedomTime
                    color={'#52AD5B;'}
                    position={'0'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'0'}
                />
                <TableCardFreedomTime
                    position={'0'}
                    width={'68px'}
                    border={'none'}
                    positionLeft={'0'}
                />
            </TableCardColumn>
            <TableCardColumn>
                <TableCardFreedomTime
                    color={'#52AD5B;'}
                    position={'0'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'0'}
                />
                <TableCardFreedomTime
                    position={'0'}
                    width={'68px'}
                    border={'none'}
                    positionLeft={'0'}
                />
            </TableCardColumn>
            <TableCardColumn>
                <TableCardFreedomTime
                    color={'#52AD5B;'}
                    position={'0'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'0'}
                />
                <TableCardFreedomTime
                    color={'#2E71F3'}
                    position={'0'}
                    height={'26px'}
                    width={'68px'}
                    border={'none'}
                    positionLeft={'0'}
                />
            </TableCardColumn>
            <TableCardColumn>
                <TableCardFreedomTime
                    color={'#52AD5B;'}
                    position={'0'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'0'}
                    last
                />
                <TableCardUserComponent
                    color={'#2E71F3'}
                    width={'67px'}
                    name={'Ксения Аксерова, 9 лет'}
                    borderHeight={'71px'}
                    borderBottom={'0'}
                    border={'none'}
                    last
                />
            </TableCardColumn>
            <TableCardColumn>
                <TableCardFreedomTime
                    position={'0'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'0'}
                />
                <TableCardFreedomTime
                    position={'0'}
                    width={'68px'}
                    border={'none'}
                    positionLeft={'0'}
                />
            </TableCardColumn>
            <TableCardColumn>
                <TableCardFreedomTime
                    position={'0'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'0'}
                />
                <TableCardFreedomTime
                    position={'0'}
                    width={'68px'}
                    border={'none'}
                    positionLeft={'0'}
                />
            </TableCardColumn>
            <TableCardColumn>
                <TableCardFreedomTime
                    position={'0'}
                    width={'69.5px'}
                    border={'none'}
                    positionLeft={'0'}
                />
                <TableCardFreedomTime
                    color={'#2E71F3'}
                    position={'0'}
                    width={'68px'}
                    border={'none'}
                    positionLeft={'0'}
                    last
                />
            </TableCardColumn>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <TableCardFreedomTime/>
            <LastColumn
                height={'20px'}
            />
            <LastColumn
                height={'20px'}
            />
            <LastColumn/>
        </TableCardRow>
    )
}