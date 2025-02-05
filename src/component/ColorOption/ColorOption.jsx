import React from 'react';
import { Button } from 'react-bootstrap';

export const ColorOption = ({
  width,
  height,
  handlerParams,
  margin,
  onclickHandler,
  btnText,
  color,
  children,
  randAnswer,
  selectedColor,
  showIcons,
  ...restOfProps // Receive the visibility state
}) => {
  return (
    <Button
      {...restOfProps}
      onClick={onclickHandler}
      variant="primary"
      style={{
        width,
        height,
        background: handlerParams?.background,
        margin,
        color,
        fontWeight: '800',
      }}
    >
      {showIcons && selectedColor && (
        <>
          {randAnswer === handlerParams?.background ? (
            <span>✔</span>
          ) : (
            handlerParams?.background === selectedColor && <span>❌</span>
          )}
        </>
      )}
      {children}
      {btnText || ''}
    </Button>
  );
};
