import styled from "styled-components";

export const TableCard = styled.div`
    display:flex;
`

export const TableCardRow = styled.div`
    width:154.5px;
    background: ${({active}) => active ? `#F4F6F9;;` : "none"};
    position: ${({active}) => active ? `relative` : "none"};
    right: ${({active}) => active ? `1px` : "none"};
    z-index: ${({active}) => active ? `0` : "none"};
    &:last-child{
        height:5px;
    }
`

export const TableCardColumn = styled.div`
    width:153px;
    border: ${({border}) => border ? `${border}` : ".5px solid rgba(0,0,0,.1)"};
    display:flex;
    height:23px;
    z-index:1;
`

export const TableCardCell = styled.div`
    height: ${({long}) => long ? "66px" : "23px"};
    width:  ${({width}) => width ? `${width}` : "149px"};
    display:flex;
    flex-direction: column;
    z-index:3;
    bottom: ${({last}) => last ? `3px` : "0"};
    background:#fff;
    border-radius:  0px 3px 3px 0px;
    border:2px solid  ${({color}) => color ? `${color}` : "rgba(0,0,0,.1)"};
    border-left:0;
`
export const TableCardUser = styled.div`
    display:flex;
    flex-direction: column;
    padding: 5px 0 0 5px;
    font-size: 11px;
    line-height: 11px;
`


export const TableCardSpan = styled.span`
    word-wrap:  break-word; 
    padding-top:3px;
    padding-right:5px;
`

export const TableCardBorder = styled.div`
    width:4px;
    position:relative;
    left: ${({position}) => position ? `${position}` : "0"};
    bottom: ${({bottom}) => bottom ? `${bottom}` : "1px"};
    height: ${({height}) => height ? `${height}` : '25px'};
    margin-left:2px;
    border-radius:${({last}) => last ? `0 0 6px 6px` : "none"};
    border-radius:${({first}) => first ? `6px 6px 0 0` : "none"};
    background:${({color}) => color ? `${color}` : "none"};
`

export const TableCardBorderUser = styled.div`
    width:4px;
    position:relative;
    left: ${({position}) => position ? `${position}` : "0"};
    bottom: ${({borderBottom}) => borderBottom ? `${borderBottom}` : "0"};
    height: ${({borderHeight}) => borderHeight ? `${borderHeight}` : "23px"};
    padding-bottom:${({last}) => last ? "5px" : "0"};
    margin-left:2px;
    background:${({color}) => color ? `${color}` : "none"};
`
export const TableCardFreedom = styled.div`
    position:relative;
    bottom: ${({bottom}) => bottom ? `${bottom}` : "1px"};
    height:25px;
    background:${({color}) => color ? `${color}` : "rgba(0,0,0,.1)"};
    left:${({positionLeft}) => positionLeft ? `${positionLeft}` : "0"};
    opacity:.1;
    width:${({width}) => width ? `${width}` : "145px"};
`

export const TableCartTimeDie = styled.div`
    position:absolute;
    width:1112px;
    z-index:0;
    left:278px;
    top:632px;
    backGround: #ED0F48;
    height: 2px;
    `
export const TableCartTimeDieCircle = styled.div`
    position:absolute;
    width: 8px;
    height: 8px;
    z-index:0;
    left:270px;
    top:629px;
    backGround: #ED0F48;;
    border-radius:50%;
    `