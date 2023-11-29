import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Content>해당 페이지를 찾지 못했습니다.</Content>
      <Content1>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</Content1>
      <Content2 onClick={handleButtonClick}>메인 페이지로 이동</Content2>
    </div>
  );
}

const Content = styled.h1`
  margin-top: 40px;
  margin-left: 40px;
  color: black;
`;

const Content1 = styled.h4`
  margin-top: 20px;
  color: black;
  margin-left: 40px;
`;

const Content2 = styled.button`
  color: red;
  margin-top: 5px;
  margin-left: 35px;
  border: none;
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

