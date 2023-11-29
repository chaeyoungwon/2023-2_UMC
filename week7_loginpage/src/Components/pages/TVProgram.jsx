import React from 'react';

function TVProgram({ program }) {
  return (
    <div>
      <h2>{program.name}</h2>
      <p>Original Name: {program.original_name}</p>
      <img src={program.backdrop_path} alt={program.name} />
    </div>
  );
}

export default TVProgram;