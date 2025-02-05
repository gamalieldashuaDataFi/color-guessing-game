import React from 'react';
import { ColorOption } from '../ColorOption/ColorOption';

const NewGameButton = ({
  newGameOnclickHandler,
  getSpinClass,
  selectedColor,
  randAnswer,
}) => (
  <div style={{ padding: '2rem' }}>
    <ColorOption
      onclickHandler={() => newGameOnclickHandler()}
      handlerParams={{ background: '#D9D9D9' }}
      height={'3.625rem'}
      width={'40.166347992351816443594646271511%'}
      margin={'2.5625rem auto 0'}
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
