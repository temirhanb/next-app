import React from "react";
import {TableSpan, TableTh, TableWeekTr} from "../../styled/tableWeekStyled";

const week = [
    {
        data: '27.07',
        title: 'Понедельник'
    }, {
        data: '28.07',
        title: 'Вторник'
    }, {
        data: '29.07',
        title: 'Среда'
    }, {
        active: true,
        data: '30.07',
        title: 'Четверг'
    }, {
        data: '31.07',
        title: 'Пятница'
    }, {
        data: '01.08',
        title: 'Суббота'
    }, {
        data: '02.08',
        title: 'Воскресенье'
    },
]


export function TableWeek() {
    return (
        <div style={({
            borderBottom: ".5px solid rgba(0,0,0,.1)",
        })}>

            <TableWeekTr>
                {week.map(({data, title, active}, index) => (
                    <TableTh
                        active={active}
                        key={index + data}
                    > {data},<br/>
                       <TableSpan>{title}</TableSpan>
                    </TableTh>
                ))}
            </TableWeekTr>
        </div>)
}