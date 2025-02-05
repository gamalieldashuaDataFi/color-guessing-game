import React from 'react';

export const ColorBox = ({ randAnswer, shuffle }) => {
  // Function to convert rgb to rgba with opacity
  const convertRgbToRgba = (rgb, opacity) => {
    if (!rgb) {
      return 'rgba(0, 0, 0, 0)'; // Fallback to transparent if rgb is undefined
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
        height: '8.125rem',
        background: backgroundColorWithOpacity,
        margin: '3.0125rem auto 3.3125rem',
        display: 'flex',
        alignItems: 'center',
      }}
      className="px-2"
    >
      <span className="badge text-dark">{`${shuffle}. `}</span>
      <h2 className="badge" style={{ background: 'black', margin: 'auto' }}>
        {randAnswer}
      </h2>
    </div>
  );
};
