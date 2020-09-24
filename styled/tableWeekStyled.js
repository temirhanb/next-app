import styled from "styled-components";

export const TableWeekTr = styled.div`
    display:flex;
    padding:0;
    margin-left:1px;    
`

export const TableTh = styled.div`
    background: ${({active}) => active ? `rgba(0, 0, 0, 0.1);` : "none"};
    padding:0;
    margin:0;
    width:154px;
    height:56px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    line-height: 13px;
    font-weight:  ${({data}) => data ? `bold` : "normal"};
    color:  ${({data}) => data ? `rgba(0, 0, 0, 0.5);` : "#000"};
`

export const TableSpan = styled.span`
    font-family: Jost;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 13px;
    color:rgba(0,0,0,.5);
`