import React from 'react';

const Instruction = ({ instruction }) => (
  <div
    data-testid="gameInstructions"
    className="instruction-section text-center p-2"
    style={{
      borderRadius: '5px',
      border: '1px solid #ced4da',
      fontSize: '1.1em',
      color: '#495057',
    }}
  >
    <span className="font-weight-bold text-danger">Instruction:</span>{' '}
    {instruction}
  </div>
);

export default Instruction;
