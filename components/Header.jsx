import {Header, Icon, Input, Notification, Profile, ProfileUser, ProfileUserName, Search} from "../styled/headerStyled";
import React from "react";

function HeaderComponent() {
    return (
        <Header>
            <Search>
                <Icon>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.20004 1.6001C10.2928 1.6001 12.8 4.1073 12.8 7.2001C12.8 8.4612 12.3832 9.62494 11.6797 10.561L11.7236 10.5954L11.7657 10.6344L14.1657 13.0344C14.4781 13.3468 14.4781 13.8534 14.1657 14.1658C13.8773 14.4542 13.4235 14.4764 13.1097 14.2323L13.0344 14.1658L10.6344 11.7658C10.607 11.7384 10.582 11.7096 10.5595 11.6795C9.62488 12.3832 8.46114 12.8001 7.20004 12.8001C4.10724 12.8001 1.60004 10.2929 1.60004 7.2001C1.60004 4.1073 4.10724 1.6001 7.20004 1.6001ZM7.20005 3.20009C4.99091 3.20009 3.20005 4.99095 3.20005 7.20009C3.20005 9.40923 4.99091 11.2001 7.20005 11.2001C9.40919 11.2001 11.2 9.40923 11.2 7.20009C11.2 4.99095 9.40919 3.20009 7.20005 3.20009Z"
                              fill="black" fillOpacity="0.5"/>
                    </svg>
                </Icon>
                <Input placeholder='Поиск клиента' type="text"/></Search>
            <Profile>
                <Notification>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 20C9.26142 20 10.2846 18.9928 10.2846 17.75H5.71536C5.71536 18.9928 6.73857 20 8 20ZM15.6925 14.7368C15.0025 14.0069 13.7114 12.909 13.7114 9.3125C13.7114 6.58086 11.7657 4.39414 9.14214 3.85766V3.125C9.14214 2.50379 8.63071 2 8 2C7.36929 2 6.85786 2.50379 6.85786 3.125V3.85766C4.2343 4.39414 2.28859 6.58086 2.28859 9.3125C2.28859 12.909 0.997522 14.0069 0.307524 14.7368C0.0932387 14.9635 -0.00176102 15.2346 2.46924e-05 15.5C0.00395325 16.0766 0.463595 16.625 1.14645 16.625H14.8536C15.5364 16.625 15.9964 16.0766 16 15.5C16.0018 15.2346 15.9068 14.9632 15.6925 14.7368Z"
                            fill="black" fillOpacity="0.2"/>
                        <circle cx="13" cy="5" r="3.75" fill="#2E71F3" stroke="#EDF0F5" strokeWidth="1.5"/>
                    </svg>
                </Notification>
                <ProfileUser>
                    <ProfileUserName>Alexander Gerasimuk</ProfileUserName>
                    <img src='/image.png'/>
                </ProfileUser>
            </Profile>
        </Header>
    )
}

export default HeaderComponent