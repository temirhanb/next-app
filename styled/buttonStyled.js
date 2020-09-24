import styled from "styled-components";

export const Buttons = styled.div`
        display:flex;
        justify-content: space-between;
        margin: 30px 0 0 30px;
    `

export const Category = styled.div
    `
        display:flex;
        flex-wrap: nowrap;
        width:147px;
        height:43px;
        justify-content: space-between;

    `

export const ButtonRectangle = styled.button`
        display:flex;
        justify-content: center;
        padding: 15px;
        border-radius:4px;
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 100%;
        border:none;
        background:#fff;
        color:#000;
        background: ${({primary}) => primary ? "#EDF0F5" : "white"};
        color: ${({primary}) => primary ? "rgba(0,0,0,.5)" : "#000"};
        border: ${({primary}) => primary ? 'solid 1px rgba(0, 0, 0, 0.1)' : 'none'};
    `

export const ButtonsLeft = styled.div`
        display:flex;
        padding-right:30px;
    `

export const ButtonRounded = styled.button`
        display:flex;
        height:43px;
        background-color: ${({green}) => green ? "#52AD5B" : "white"};
        width ${({green}) => green ? "123px" : "111px"};
        color: ${({green}) => green ? "#fff" : "#000"};
        border-radius:30px;
        font-family: Jost;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
        border:none;
        align-items:center;
        justify-content: flex-end;
        padding:0;
        margin-right:10px
    `

export const ButtonText = styled.span`
        padding-left:5px;
        padding-right:25px;
    `

export const BlockTypes = styled.div`
        display:flex;
        justify-content: flex-end;
        width:126px;
        height:43px;
        border-radius:30px;
        background-color:#fff;
    `

export const ButtonCircle =styled.button`
        border:none;
        border-radius:50%;
        height:43px;
        width:42px;
        background-color: ${({active}) => active ? "#2E71F3" : "white"};
    `