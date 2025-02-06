import React from 'react';
import { ColorOption } from '../ColorOption/ColorOption';

const NewGameButton = ({
  newGameOnclickHandler,
  getSpinClass,
  selectedColor,
  randAnswer,
}) => (
  <div className="p-3">
    <ColorOption
      onclickHandler={() => newGameOnclickHandler()}
      handlerParams={{ background: '#D9D9D9' }}
      height={'3.625em'}
      color="black"
      btnText=" New Game"
      selectedColor={selectedColor}
      randAnswer={randAnswer}
      data-testid="newGameButton"
    >
      <span className={getSpinClass()}> ⌛</span>
    </ColorOption>
  </div>
);

export default NewGameButton;
