import React from "react";
import {
    BlockTypes, ButtonCircle,
    ButtonRectangle,
    ButtonRounded,
    Buttons,
    ButtonsLeft,
    ButtonText,
    Category
} from "../styled/buttonStyled";

function ButtonsComponent() {
    return (
        <Buttons>
            <Category>
                <ButtonRectangle>Неделя</ButtonRectangle>
                <ButtonRectangle primary>День</ButtonRectangle>
            </Category>
            <ButtonsLeft>
                <ButtonRounded
                    green
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8 2.5C8.3797 2.5 8.6875 2.8078 8.6875 3.1875V7.3125H12.8125C13.1922 7.3125 13.5 7.6203 13.5 8C13.5 8.3797 13.1922 8.6875 12.8125 8.6875H8.6875V12.8125C8.6875 13.1922 8.3797 13.5 8 13.5C7.6203 13.5 7.3125 13.1922 7.3125 12.8125V8.6875H3.1875C2.8078 8.6875 2.5 8.3797 2.5 8C2.5 7.6203 2.8078 7.3125 3.1875 7.3125H7.3125V3.1875C7.3125 2.8078 7.6203 2.5 8 2.5Z"
                              fill="white"/>
                    </svg>

                    <ButtonText>Добавить</ButtonText>
                </ButtonRounded>
                <ButtonRounded>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.99822 9.52739L1.43766 2.35784C1.15535 1.91402 1.47403 1.33325 1.99987 1.33325H13.9949C14.5208 1.33325 14.8394 1.91402 14.5571 2.35784L9.99657 9.52739V12.6666C9.99657 12.9191 9.85396 13.1499 9.6282 13.2629L6.96263 14.5962C6.51955 14.8178 5.99822 14.4955 5.99822 13.9999V9.52739ZM3.21346 2.6665L7.22646 8.97525C7.2945 9.08222 7.33064 9.20638 7.33064 9.33317V12.9211L8.66343 12.2545V9.33317C8.66343 9.20638 8.69957 9.08222 8.76761 8.97525L12.7806 2.6665H3.21346Z"
                              fill="black"/>
                    </svg>
                    <ButtonText>Фильтр</ButtonText>
                </ButtonRounded>
                <BlockTypes>
                    <ButtonCircle>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.86712 2.46655H1.13379V4.19989H2.86712V2.46655Z" fill="black"
                                  fillOpacity="0.5"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.86712 7.13322H1.13379V8.86655H2.86712V7.13322Z" fill="black"
                                  fillOpacity="0.5"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.86712 11.7999H1.13379V13.5332H2.86712V11.7999Z" fill="black"
                                  fillOpacity="0.5"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14.8671 12.6666C14.8671 12.1879 14.4791 11.7999 14.0004 11.7999H4.66709C4.18844 11.7999 3.80042 12.1879 3.80042 12.6666C3.80042 13.1452 4.18844 13.5332 4.66709 13.5332H14.0004C14.4791 13.5332 14.8671 13.1452 14.8671 12.6666Z"
                                  fill="black" fillOpacity="0.5"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14.8671 7.99988C14.8671 7.52124 14.4791 7.13322 14.0004 7.13322H4.66709C4.18844 7.13322 3.80042 7.52124 3.80042 7.99988C3.80042 8.47853 4.18844 8.86655 4.66709 8.86655H14.0004C14.4791 8.86655 14.8671 8.47853 14.8671 7.99988Z"
                                  fill="black" fillOpacity="0.5"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14.8671 3.33322C14.8671 2.85457 14.4791 2.46655 14.0004 2.46655H4.66709C4.18844 2.46655 3.80042 2.85457 3.80042 3.33322C3.80042 3.81187 4.18844 4.19989 4.66709 4.19989H14.0004C14.4791 4.19989 14.8671 3.81187 14.8671 3.33322Z"
                                  fill="black" fillOpacity="0.5"/>
                        </svg>

                    </ButtonCircle>
                    <ButtonCircle>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M11.3334 1.33325C11.7016 1.33325 12 1.63173 12 1.99992V2.66659H12.6667C13.7713 2.66659 14.6667 3.56202 14.6667 4.66659V12.6666C14.6667 13.7712 13.7713 14.6666 12.6667 14.6666H3.33337C2.2288 14.6666 1.33337 13.7712 1.33337 12.6666V4.66659C1.33337 3.56202 2.2288 2.66659 3.33337 2.66659H4.00004V1.99992C4.00004 1.63173 4.29852 1.33325 4.66671 1.33325C5.0349 1.33325 5.33337 1.63173 5.33337 1.99992V2.66659H10.6667V1.99992C10.6667 1.63173 10.9652 1.33325 11.3334 1.33325ZM2.66676 7.99991V12.6666C2.66676 13.0348 2.96524 13.3332 3.33343 13.3332H12.6668C13.035 13.3332 13.3334 13.0348 13.3334 12.6666V7.99991H2.66676ZM2.66676 6.66658H13.3334V4.66658C13.3334 4.29839 13.035 3.99991 12.6668 3.99991H12.0001V4.66658C12.0001 5.03477 11.7016 5.33325 11.3334 5.33325C10.9652 5.33325 10.6668 5.03477 10.6668 4.66658V3.99991H5.33343V4.66658C5.33343 5.03477 5.03495 5.33325 4.66676 5.33325C4.29857 5.33325 4.0001 5.03477 4.0001 4.66658V3.99991H3.33343C2.96524 3.99991 2.66676 4.29839 2.66676 4.66658V6.66658Z"
                                  fill="black" fillOpacity="0.5"/>
                        </svg>
                    </ButtonCircle>
                    <ButtonCircle
                        active
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M6.33325 2.16484L7.99992 2.96867L9.66659 2.16484C10.7365 1.64883 11.93 1.64883 12.9999 2.16484L14.2475 2.76655C14.5006 2.88862 14.6666 3.1842 14.6666 3.51289V13.035C14.6666 13.4789 14.3681 13.8388 13.9999 13.8388C13.9151 13.8388 13.8311 13.8193 13.7523 13.7813L12.9999 13.4184C11.93 12.9024 10.7365 12.9024 9.66659 13.4184L7.99992 14.2223L6.33325 13.4184C5.26335 12.9024 4.06982 12.9024 2.99992 13.4184L2.24751 13.7813C1.90566 13.9462 1.51768 13.7457 1.38093 13.3335C1.34944 13.2386 1.33325 13.1373 1.33325 13.035V3.51289C1.33325 3.1842 1.49922 2.88862 1.75232 2.76655L2.99992 2.16484C4.06982 1.64883 5.26335 1.64883 6.33325 2.16484ZM3.50931 3.6024L2.66659 4.00884V11.8999C4.01687 11.3087 5.50494 11.3357 6.84264 11.9809L7.33325 12.2172V4.3305L5.82387 3.6024C5.08017 3.24372 4.253 3.24372 3.50931 3.6024ZM10.176 3.6024L8.66659 4.32972V12.2172L9.1572 11.9809C10.4949 11.3357 11.983 11.3087 13.3333 11.8999V4.00884L12.4905 3.6024C11.7468 3.24372 10.9197 3.24372 10.176 3.6024Z"
                                  fill="white"/>
                        </svg>
                    </ButtonCircle>
                </BlockTypes>
            </ButtonsLeft>
        </Buttons>
    )
}

export default ButtonsComponent