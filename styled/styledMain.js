import styled from "styled-components";

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
