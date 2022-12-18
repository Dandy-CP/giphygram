// Generate random color using for gif placeholder while load gif
const randomFillColor =
  '#' +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
    .toUpperCase();

// A SVG components for placeholder gif
export const GifPlaceholder = (w: number, h: number) => `
<svg 
width="${w}" 
height="${h}" 
version="1.1" 
xmlns="http://www.w3.org/2000/svg" 
xmlns:xlink="http://www.w3.org/1999/xlink">
<rect fill="${randomFillColor}" width="${w}" height="${h}"/>
</svg>`;

// Generate Base64 code from placeholder components
export const PlaceholderToBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
