import React, { FC, useState } from 'react';
import { generateAccessibleColors } from './colorUtils';

interface ColorChangeProps {
  children: React.ReactNode;
}

const ColorChange: FC<ColorChangeProps> = ({ children }) => {
  const [colors, setColors] = useState<[string, string]>(['#000000', '#ffffff']);

  const handleMouseOver = () => {
    setColors(generateAccessibleColors());
  };

  return (
    <div
      id="change"
      onMouseOver={handleMouseOver}
      style={{
        backgroundColor: colors[1],
        color: colors[0],
        margin: colors[1],
      }}
    >
      <div
        style={{
          border: '1px solid',
          borderColor: colors[0],
          margin: colors[1],
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ColorChange;
