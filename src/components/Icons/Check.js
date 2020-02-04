/** React dependencies */
import React from 'react';

const Check = ({ width = 24, height = 24, colorFill = '#5697FA' }) => (
  <svg className="message-data--seeing" width={width} height={height} fillRule="evenodd" clipRule="evenodd" viewBox="-10 -6 36 36" fill={colorFill}>
    <path d="M24 6.278l-11.16 12.722-6.84-6 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.278zm-22.681 5.232l6.835 6.01-1.314 1.48-6.84-6 1.319-1.49zm9.278.218l5.921-6.728 1.482 1.285-5.921 6.756-1.482-1.313z" />
  </svg>
);

export default Check;
