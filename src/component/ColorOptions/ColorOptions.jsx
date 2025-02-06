import React from 'react';
import { ColorOption } from '../ColorOption/ColorOption';

const ColorOptions = ({
  randRgbs,
  onclickHandler,
  randAnswer,
  selectedColor,
  message,
}) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '73.804971319311663479923518164436%',
      margin: 'auto',
    }}
  >
    {randRgbs?.map(option => (
      <ColorOption
        data-testid="colorOption"
        onclickHandler={() => onclickHandler(option)}
        handlerParams={{ background: option }}
        height={'3.625rem'}
        width={'40.166347992351816443594646271511%'}
        margin={'0.2625em auto 0'}
        randAnswer={randAnswer}
        selectedColor={selectedColor}
        key={option}
        message={message}
      />
    ))}
  </div>
);

export default ColorOptions;
