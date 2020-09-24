import React from 'react';
import styled from "styled-components";
import Link from "next/link";
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

export const Content = styled.div`
    display:flex;
    width:1440px;
    height:900px;
    background-color:#EDF0F5;
    `

export const Main = styled.div`
        height:900px;
        width:1230px;
    `

export const Calendar = styled.div`
        margin:20px 30px 0 30px;
        background:#fff;
        width:1170px;
        height:735px;
        border-radius:4px;
    `

export const Data = styled.div`
    display flex;
    justify-content: flex-end;
    padding: 20px 20px 0 0;
    font-size: 18px;
    line-height: 26px;
`

export const Toggle = styled.span`
    padding-left:368px;
`

export const ToggleLink = styled.a`
    color:#979797;
    text-decoration:underline;
    height: 16px;
`

export const LegendUl = styled.ul`
    padding:0;
    margin:0;
    display:flex;
    justify-content: center;
    padding-top:20px;
`
export const LegendLi = styled.li`
    list-style-type: none;
    display:flex;
    align-items:center;
    font-size: 11px;
    line-height: 16px;
   `
export const LegendCircle = styled.div`
    width:11px;
    height:11px;
    border-radius:50%;
    margin-right:5px;
    margin-left:15px;
    background-color: ${({point}) => point ? `${point}` : "#fff"};
`

export const legendUser = [
    {
        name: 'Высоцкая Элеонора',
        point: '#DF1B7D;'
    }, {
        name: 'Гайсина Гузель',
        point: '#52AD5B;'
    }, {
        name: 'Гиголо Анна',
        point: '#FE8900;'
    }, {
        name: 'Горбукова Юлия',
        point: '#00459B;'
    }, {
        name: 'Марков Руслан',
        point: '#2E71F3;'
    },

]

export const TimeTable = styled.div`
    margin: 20px 20px 0 20px;
    border-top:1px solid rgba(0, 0, 0, 0.1);
    display:flex;
`

export const ColumnTime = styled.div`
    width:48px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin:0;
`

export const ColumnTimeUl = styled.ul`
    padding:0;
    margin:0;
`

export const ColumnTimeLi = styled.li`
    list-style-type: none;
    padding-bottom:31px;
    font-size: 12px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.5);
        &:nth-child(12n) {
            padding-bottom:23px;
        } 
        &:last-child {
            padding:0;
        }
`

export const TimeIcon = styled.div`
    padding:15px 23px 16px 9px;
    width:16px;
    height:16px;
`

export const Table = styled.div`
    display:flex;
    flex-direction: column;
`

export default function Home() {

    return (
        <Content>
            <LeftBar/>
            <Main>
                <HeaderComponent/>
                <ButtonsComponent/>
                <Calendar>
                    <Data>
                        <span>
                        27 июля – 2 августа 2020 г.
                        </span>
                        <Toggle>
                            <Link href='/'>
                                <ToggleLink>
                                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M7.29986 13C7.12067 13 6.94148 12.9347 6.80498 12.8047L1.20526 7.47141C0.931578 7.21075 0.931578 6.78942 1.20526 6.52876L6.80498 1.1955C7.07867 0.934834 7.52105 0.934834 7.79473 1.1955C8.06842 1.45616 8.06842 1.87749 7.79473 2.13815L2.68989 7.00008L7.79473 11.862C8.06842 12.1227 8.06842 12.544 7.79473 12.8047C7.65824 12.9347 7.47905 13 7.29986 13Z"
                                              fill="black"/>
                                        <path
                                            d="M7.29986 13C7.12067 13 6.94148 12.9347 6.80498 12.8047L1.20526 7.47141C0.931578 7.21075 0.931578 6.78942 1.20526 6.52876L6.80498 1.1955C7.07867 0.934834 7.52105 0.934834 7.79473 1.1955C8.06842 1.45616 8.06842 1.87749 7.79473 2.13815L2.68989 7.00008L7.79473 11.862C8.06842 12.1227 8.06842 12.544 7.79473 12.8047C7.65824 12.9347 7.47905 13 7.29986 13"
                                            stroke="black" strokeWidth="0.25"/>
                                    </svg>
                                    сегодня
                                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd" clipRule="evenodd"
                                            d="M1.70014 13C1.87933 13 2.05852 12.9347 2.19502 12.8047L7.79474 7.47141C8.06842 7.21075 8.06842 6.78942 7.79474 6.52876L2.19502 1.1955C1.92133 0.934834 1.47895 0.934834 1.20527 1.1955C0.931579 1.45616 0.931579 1.87749 1.20527 2.13815L6.31011 7.00008L1.20527 11.862C0.931579 12.1227 0.931579 12.544 1.20527 12.8047C1.34176 12.9347 1.52095 13 1.70014 13Z"
                                            fill="black"/>
                                        <path
                                            d="M1.70014 13C1.87933 13 2.05852 12.9347 2.19502 12.8047L7.79474 7.47141C8.06842 7.21075 8.06842 6.78942 7.79474 6.52876L2.19502 1.1955C1.92133 0.934834 1.47895 0.934834 1.20527 1.1955C0.931579 1.45616 0.931579 1.87749 1.20527 2.13815L6.31011 7.00008L1.20527 11.862C0.931579 12.1227 0.931579 12.544 1.20527 12.8047C1.34176 12.9347 1.52095 13 1.70014 13"
                                            stroke="black" strokeWidth="0.25"/>
                                    </svg>

                                </ToggleLink>
                            </Link>
                        </Toggle>
                    </Data>
                    <LegendUl>
                        {legendUser.map(({name, point}, index) => (

                            <LegendLi
                                key={index + name}
                            >
                                <LegendCircle
                                    point={point}>
                                </LegendCircle>
                                {name}
                            </LegendLi>
                        ))}
                    </LegendUl>
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