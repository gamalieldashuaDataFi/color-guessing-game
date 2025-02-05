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
    <div
      style={{
        width: '80%',
        margin: 'auto',
        background: '#D9FCD1',
        transform: 'scale(.9)',
      }}
    >
      <Message message={message} />
      <Instruction instruction="Guess the correct color!" />
      <ColorBox shuffle={shuffle} randAnswer={randAnswer} />
      <Score score={score} />
      <ColorOptions
        randRgbs={randRgbs}
        onclickHandler={onclickHandler}
        randAnswer={randAnswer}
        selectedColor={selectedColor}
        message={message}
      />
      <NewGameButton
        newGameOnclickHandler={newGameOnclickHandler}
        getSpinClass={getSpinClass}
        selectedColor={selectedColor}
        randAnswer={randAnswer}
      />
    </div>
  );
};
