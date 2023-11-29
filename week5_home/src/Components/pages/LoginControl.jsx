import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import styled from 'styled-components';

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    
    render() {
      return (
        <>
            <Button onClick={this.state.isLoggedIn ? this.handleLogoutClick : this.handleLoginClick}>
                {this.state.isLoggedIn ? '로그아웃' : '로그인'}
            </Button>
            <Message>{this.state.isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</Message>
        </>
        );
    }
}

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