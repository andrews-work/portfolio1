// colorUtils.ts

function generateAccessibleColors(): [string, string] {
  let color1, color2;
  do {
    color1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  } while (getContrast(color1, color2) < 4.5);

  return [color1, color2];
}

function getContrast(hexcolor1: string, hexcolor2: string): number {
  const rgb1 = hexToRgb(hexcolor1);
  const rgb2 = hexToRgb(hexcolor2);

  if (!rgb1 || !rgb2) {
    throw new Error('Invalid color format');
  }

  const luminance1 = 0.2126 * rgb1.r + 0.7152 * rgb1.g + 0.0722 * rgb1.b;
  const luminance2 = 0.2126 * rgb2.r + 0.7152 * rgb2.g + 0.0722 * rgb2.b;

  const brightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);

  return (brightest + 0.05) / (darkest + 0.05);
}


function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(hex);
  if (!result) {
    return null;
  }

  const r = parseInt(result[1].repeat(result[1].length === 1 ? 2 : 1), 16);
  const g = parseInt(result[2].repeat(result[2].length === 1 ? 2 : 1), 16);
  const b = parseInt(result[3].repeat(result[3].length === 1 ? 2 : 1), 16);

  return { r, g, b };
}

export { generateAccessibleColors };


