import styled from "styled-components";

export const Header = styled.div`
        display:flex;
        justify-content: space-between;
    `

export const Input = styled.input`
    width :464px;
    height :43px;
    border:none;
    font-family: Jost;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    border-radius: 0 50px 50px 0;
    padding:0;
    margin:0;
    `

export const Search = styled.div`
       margin-left:30px;
       margin-top:30px;
       display:flex;
       width :500px;
       height :43px;
    `

export const Icon = styled.div`
           padding:13px 5px 14px 15px;
           height:16px;
           border-radius: 50px 0 0  50px;
           background-color: #fff
    `

export const Profile = styled.div`
        margin: 30px 30px 0 0;
        display: flex;
    `

export const ProfileUser = styled.div`
        display:flex;
        height:43px;
        align-items: center;
        border-left: 1px solid rgba(0,0,0,.1);
        padding-left:15px;
    `
export const ProfileUserName = styled.span`
        padding-right:10px
    `

export const Notification = styled.div`
    display:flex;
        height:43px;
        align-items: center;
        padding-right:15px
    `