import React from 'react';

const Score = ({ score }) => (
  <div className="text-center">
    <h4 data-testid="score" className="font-weight-bold text-dark badge">
      Score: {score}
    </h4>
  </div>
);

export default Score;
