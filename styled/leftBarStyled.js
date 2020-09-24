import styled from "styled-components";

export const LeftMenu = styled.div`
    display:flex;
    width:210px;
    height:900px;
    flex-direction: column;
    background-color:#fff;
    `

export const Logo = styled.div`
    display:flex;
    padding:30px 20px 0 45px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);;
    height:129px;
    justify-content: flex-end;
    margin-bottom:40px
    `

export const Hide = styled.div`
       margin-left:10px
    `

export const LeftBarLi = styled.li`
    list-style-type: none;
   `
export const LeftBarUl = styled.ul`
    padding:0;
    margin:0;
   `

export const LeftBarItem = styled.div`
    height: 45px;
    display:flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    background-color: ${({active}) => active ? "#F4F6F9" : "#fff"};
    `

export const LeftBarItemIcon = styled.div`
        margin-right:10px
    `

export const BlueLine = styled.div`
    visibility: ${({active}) => active ? "visible" : "hidden"};
    height:43px;
    background:#2E71F3;
    width:1px;
    margin-right:27px;
    border:1px solid #2E71F3;
    border-radius: 3px 0 3px 0;
    `