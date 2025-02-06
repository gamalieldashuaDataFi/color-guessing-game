import React from 'react';
import ColorOptions from '../ColorOptions/ColorOptions';
import NewGameButton from '../NewGameButton/NewGameButton';
import Message from '../Message/Message';
import { ColorBox } from '../ColorBox/ColorBox';
import Instruction from '../Instruction/Instruction';
import Score from '../Score/Score';
import { useSpinClass } from '../../hooks/useSpinClass';

export const QuestionCard = ({
  shuffle,
  randRgbs,
  onclickHandler,
  randAnswer,
  newGameOnclickHandler,
  score,
  message,
  isSpinning,
  selectedColor,
}) => {
  const getSpinClass = useSpinClass(isSpinning, score);

  return (
    <div className="position-relative main-wrapper m-3">
      {' '}
      <Message message={message} />
      <div
        className="position-relative rounded"
        style={{
          maxWidth: '768px',
          margin: 'auto',
          background: '#D9FCD1',
        }}
      >
        <Instruction instruction="Guess the correct color!" />
        <ColorBox shuffle={shuffle} randAnswer={randAnswer} />
        <Score score={score} />
        <ColorOptions
          randRgbs={randRgbs}
          onclickHandler={onclickHandler}
          randAnswer={randAnswer}
          selectedColor={selectedColor}
          message={message}
          className="glow-button"
        />
        <NewGameButton
          newGameOnclickHandler={newGameOnclickHandler}
          getSpinClass={getSpinClass}
          selectedColor={selectedColor}
          randAnswer={randAnswer}
        />
      </div>
    </div>
  );
};
