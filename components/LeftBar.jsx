import React from "react";
import LogoLeftBar from "./LogoLeftBar";
import {leftMenuLinks} from '../utiles/iconLeftBar'
import {
    BlueLine,
    Hide,
    LeftBarItem,
    LeftBarItemIcon,
    LeftBarLi,
    LeftBarUl,
    LeftMenu,
    Logo
} from "../styled/leftBarStyled";

export default function LeftBar() {

    return (
        <LeftMenu>
            <Logo>
                <LogoLeftBar/>
                <Hide>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fillRule="evenodd" clipRule="evenodd"
                              d="M1.4 13.3C1.4 13.6866 1.0866 14 0.7 14C0.313401 14 0 13.6866 0 13.3V0.7C0 0.313401 0.313401 0 0.7 0C1.0866 0 1.4 0.313401 1.4 0.7V13.3ZM2.79958 7L2.80238 6.9426L2.81375 6.85949L2.8344 6.7815L2.86515 6.70374L2.90178 6.6355L2.937 6.58339L3.0046 6.50502L5.8046 3.70503C6.07797 3.43166 6.52119 3.43166 6.79455 3.70503C7.04689 3.95736 7.0663 4.35443 6.85279 4.62903L6.79455 4.69497L5.19008 6.3H13.2996C13.6862 6.3 13.9996 6.6134 13.9996 7C13.9996 7.3866 13.6862 7.7 13.2996 7.7H5.19008L6.79455 9.30502C7.04689 9.55736 7.0663 9.95442 6.85279 10.229L6.79455 10.295C6.54221 10.5473 6.14515 10.5667 5.87055 10.3532L5.8046 10.295L3.0046 7.49497L2.97563 7.4642L2.93701 7.41671L2.88685 7.33884L2.86514 7.29617L2.8415 7.23915L2.82467 7.18619L2.80436 7.08223L2.79958 7Z"
                              fill="black"/>
                    </svg>
                </Hide>
            </Logo>
            <div>
                <LeftBarUl>
                    {leftMenuLinks.map(({title, icon, active}, index) => (
                        <LeftBarLi
                            key={index + title}
                        >
                            <LeftBarItem active={active}>
                                <BlueLine active={active}/>
                                <LeftBarItemIcon>{icon}</LeftBarItemIcon>
                                {title}
                            </LeftBarItem>
                        </LeftBarLi>
                    ))}
                </LeftBarUl>
            </div>
        </LeftMenu>
    )
}