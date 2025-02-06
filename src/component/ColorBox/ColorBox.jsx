import React from 'react';

export const ColorBox = ({ randAnswer, shuffle }) => {
  const convertRgbToRgba = (rgb, opacity) => {
    if (!rgb) {
      return 'rgba(0, 0, 0, 0)';
    }
    const rgbValues = rgb.match(/\d+/g);
    if (rgbValues) {
      const [r, g, b] = rgbValues;
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return rgb; // Fallback to original if conversion fails
  };

  const backgroundColorWithOpacity = convertRgbToRgba(randAnswer, 0.5); // Set opacity to 0.5

  return (
    <div
      data-testid="colorBox"
      style={{
        width: '73.804971319311663479923518164436%',
        height: '7.125em',
        background: backgroundColorWithOpacity,
        margin: '2.0125em auto 2.3125em',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h2
        className="p-1"
        style={{ background: 'black', margin: 'auto', fontSize: '.8em' }}
      >
        <span>{`${shuffle}. `}</span>
        {randAnswer}
      </h2>
    </div>
  );
};
