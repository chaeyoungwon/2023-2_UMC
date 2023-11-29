import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

const LoginControl = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
  
    const handleLoginClick = () => {
        setLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setLoggedIn(false);
    };
   
    return (
        <>
            <Button onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
                {isLoggedIn ? '로그아웃' : '로그인'}
            </Button>
            <Message>{isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</Message>
        </>
    );
};

const Button = styled.button`
    color: black;
    border-radius: 15px;
    cursor: pointer;
    width: 90px;
    height: 30px;
    background-color: white;
    border: none;
    font-size: 15px;
`;

const Message = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 5px;
`

export default LoginControl;