import React from 'react';
import LeftBar from "../components/LeftBar";
import HeaderComponent from "../components/Header";
import ButtonsComponent from "../components/Buttons";
import {TableWeek} from "../components/TableWeek/TableWeek";
import {TableCard} from "../styled/tableCard";
import {TableMonday} from "../components/TableWeek/TableMonday";
import {TableTuesday} from "../components/TableWeek/TableTuesday";
import {timeLine} from "../utiles/time";
import {TableWednesday} from "../components/TableWeek/TableWednesday";
import {TableThursday} from "../components/TableWeek/TableThursday";
import {TableFriday} from "../components/TableWeek/TableFriday";
import {TableWeekend} from "../components/TableWeek/TableWeekend";
import {
    Calendar,
    ColumnTime,
    ColumnTimeLi,
    ColumnTimeUl,
    Content,
    Main,
    Table,
    TimeIcon,
    TimeTable,
} from "../styled/styledMain";
import {Legend} from "../components/Legend";
import {DataComponent} from "../components/Data";


export default function Home() {

    return (
        <Content>
            <LeftBar/>
            <Main>
                <HeaderComponent/>
                <ButtonsComponent/>
                <Calendar>
                    <DataComponent/>
                    <Legend/>
                    <TimeTable>
                        <ColumnTime>
                            <TimeIcon>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M1.52729 3.52827L3.52729 1.52827C3.78764 1.26792 4.20975 1.26792 4.4701 1.52827C4.73045 1.78862 4.73045 2.21073 4.4701 2.47108L2.4701 4.47108C2.20975 4.73143 1.78764 4.73143 1.52729 4.47108C1.26694 4.21073 1.26694 3.78862 1.52729 3.52827ZM12.4701 1.52827L14.4701 3.52827C14.7305 3.78862 14.7305 4.21073 14.4701 4.47108C14.2098 4.73143 13.7876 4.73143 13.5273 4.47108L11.5273 2.47108C11.2669 2.21073 11.2669 1.78862 11.5273 1.52827C11.7876 1.26792 12.2098 1.26792 12.4701 1.52827ZM7.9987 14.6663C11.3124 14.6663 13.9987 11.9801 13.9987 8.66634C13.9987 5.35263 11.3124 2.66634 7.9987 2.66634C4.68499 2.66634 1.9987 5.35263 1.9987 8.66634C1.9987 11.9801 4.68499 14.6663 7.9987 14.6663ZM7.9987 13.333C5.42137 13.333 3.33203 11.2437 3.33203 8.66634C3.33203 6.08901 5.42137 3.99967 7.9987 3.99967C10.576 3.99967 12.6654 6.08901 12.6654 8.66634C12.6654 11.2437 10.576 13.333 7.9987 13.333ZM7.9987 5.33301C8.36689 5.33301 8.66536 5.63148 8.66536 5.99967V7.72353L9.80344 8.8616C10.0638 9.12195 10.0638 9.54406 9.80344 9.80441C9.54309 10.0648 9.12098 10.0648 8.86063 9.80441L7.52729 8.47108C7.40227 8.34605 7.33203 8.17649 7.33203 7.99967V5.99967C7.33203 5.63148 7.63051 5.33301 7.9987 5.33301Z"
                                          fill="black"/>
                                </svg>
                            </TimeIcon>
                            <ColumnTimeUl>
                                {
                                    timeLine.map(({hour, minute}, index) => (
                                        <ColumnTimeLi
                                            key={index + hour}
                                        >{hour}:{minute}</ColumnTimeLi>
                                    ))
                                }

                            </ColumnTimeUl>
                        </ColumnTime>
                        <Table>
                            <TableWeek/>
                            <TableCard>
                                <TableMonday/>
                                <TableTuesday/>
                                <TableWednesday/>
                                <TableThursday/>
                                <TableFriday/>
                                <TableWeekend/>
                                <TableWeekend/>
                            </TableCard>
                        </Table>
                    </TimeTable>
                </Calendar>
            </Main>
        </Content>
    )
}