import React from 'react';
import { tvprograms } from "../../Data/tvDummy";
import styled from 'styled-components';

function TV() {
  const tvProgramsList = tvprograms.results.map((tvprogram) => (
    <TVprogramItem key={tvprogram.id}>
      <TVprogramBox>
        <Name> {tvprogram.name}</Name>
        <Original_name>{tvprogram.original_name} </Original_name> 
        {tvprogram.backdrop_path && (
          <TVProgramImage
            src={`https://image.tmdb.org/t/p/w500${tvprogram.backdrop_path}`}
            alt = {tvprogram.name}
          />
        )}  
      </TVprogramBox>
      
    </TVprogramItem>
  ));

  return(
    <div>
      <ul><TVProgramContainer>{tvProgramsList}</TVProgramContainer></ul>
    </div>
  );    
}

export default TV;

const TVProgramImage = styled.img`  
  max-width: 100%;
  cursor: pointer;
  display: flex;
  border-radius: 30px;
  justify-content: center;
`

const TVprogramBox = styled.div`
  margin-top: 20px;
  background-color: rgb(34, 37, 75, 0.25);
  padding: 20px; 
  display: flex;
  border-radius: 40px;
  flex-direction: column;
  align-items: center;
`

const Name = styled.div`
  margin-top: 5px;
  font-weight: bold;
  font-size: 20px;
  color: #22254b;
  font-family : 'Noto Sans KR', sans-serif;
  letter-spacing: 0.5px;
`
const Original_name = styled.div`
  margin: 3px;
  font-style: italic;
`

const TVprogramItem = styled.li`
  width: 31%;
  margin-bottom: 20px;
`

const TVProgramContainer = styled.div`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px;
`