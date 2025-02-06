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
  ...restOfProps
}) => {
  return (
    <Button
      {...restOfProps}
      onClick={onclickHandler}
      variant="outline-light"
      style={{
        width,
        height,
        background: handlerParams?.background,
        margin,
        color,
      }}
    >
      {children}
      {btnText || ''}
    </Button>
  );
};
