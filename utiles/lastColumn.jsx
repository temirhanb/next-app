import React from "react";
import styled from "styled-components";

const LastColumnDiv = styled.div`
    width:153px;
    border: ${({border}) => border ? `${border}` : ".5px solid rgba(0,0,0,.1)"};
    display:flex;
    height: ${({height}) => height ? `${height}` : "5px"};
    z-index:1;
    border-bottom:none;
    `

export function LastColumn({height}){
    return <LastColumnDiv
        height={height}
    />
}
