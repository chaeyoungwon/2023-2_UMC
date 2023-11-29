import styled from 'styled-components';

export const Body = styled.div`
  background-color: #22254b;
`;

export const Box = styled.div`
  box-sizing: border-box;
`;

export const AppContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  padding: 20px;
`;

export const MovieContainer = styled.div`
  width:350px;
  margin:15px;
  background: rgb(61, 61, 101);
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.6);
  border-radius: 2%;
  color:white;
  position:relative;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  position:relative;
  width:100%;
  height:100%;
  background-color: rgb(61, 61, 101);
`;

export const MovieImage = styled.img`
  max-width:100%;
  height:auto;
  display:flex;
  object-fit: cover;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  padding: 20px;
  color:white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MovieTitle = styled.h4`
  margin: 2px;
  flex:1;
`;

export const VoteAverage = styled.span`
  margin-left: 3px;
`;

export const DetailContainer = styled.div`
  position: absolute;
  display:flex;
  flex-direction: column;
  align-items: center;
  color:white;
  background-color:rgba(0,0,0,0.7);
  top:0;left:0;
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: 0;
`;