import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width:153px;
    border: ${({border}) => border ? `${border}` : ".5px solid rgba(0,0,0,.1)"};
    display:flex;
    height:5px;
    z-index:1;
    border-bottom:none;
    `

export function LastColumn(){
    return <Div/>
}
