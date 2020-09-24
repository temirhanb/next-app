import {TableCardUserComponent} from "./TableCardUserComponent";
import {TableCardFreedomTime} from "./TableCardFreedomTime";
import {TableCardRow} from "../../styled/tableCard";
import React from "react";
import {LastColumn} from "../../utiles/lastColumn";

export function TableMonday() {
    return (
        <TableCardRow>
            <TableCardUserComponent
                color={'#DF1B7D;'}
                width={'143px'}
                name={'Тельнова Злата'}
                borderHeight={'70px'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />

            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
                height={'29px'}
                bottom={'2px'}
            />
            <TableCardUserComponent
                color={'#DF1B7D;'}
                width={'143px'}
                name={'Ксюша Диденко 7 лет'}
                borderHeight={'71px'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
                bottom={'2px'}
                height={'29px'}
            />

            <TableCardUserComponent
                color={'#DF1B7D;'}
                width={'143px'}
                name={'Эрик 6 лет'}
                borderHeight={'70px'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
            />
            <TableCardFreedomTime
                color={'#DF1B7D;'}
                last
            />
            <TableCardFreedomTime/>
            <LastColumn/>
        </TableCardRow>
    )
}