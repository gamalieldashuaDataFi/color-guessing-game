import React from 'react';

const Instruction = ({ instruction }) => (
  <div
    data-testid="gameInstructions"
    className="instruction-section text-center m-3 px-2"
    style={{
      borderRadius: '5px',
      border: '1px solid #ced4da',
      fontSize: '1.1rem',
      color: '#495057',
    }}
  >
    <span className="font-weight-bold text-danger">Instruction:</span>{' '}
    {instruction}
  </div>
);

export default Instruction;
