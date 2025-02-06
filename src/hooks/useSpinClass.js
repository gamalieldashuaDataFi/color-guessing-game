import React from 'react';
import { useCallback } from 'react';

export const useSpinClass = (isSpinning, score) => {
  return useCallback(
    () => (isSpinning ? 'spin-animation' : ''),
    [score, isSpinning]
  );
};
