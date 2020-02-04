/** React dependencies */
import React from 'react'

/** Components dependencies */
import Check from './Check'

const icons = {
  check: Check
};

/**
 * Stateless Component that shows an icon. You must send on
 * props the type of icon.
 * @param {String} type - the type of icon, cannot be null.
 * @param {Number} width - the width of svg icon, can be null.
 * @param {Number} height - the height of svg icon, can be null.
 * @param {String} colorStroke - the color of svg icon, can be null.
 * @param {String} colorFill - the color of svg icon, can be null.
 */
const GeneratedIcon = ({ type, width, height, colorStroke, colorFill }) => {
  const Icon = icons[type];
  return <Icon
    width={width}
    height={height}
    colorStroke={colorStroke}
    colorFill={colorFill}
  />;
};

export default GeneratedIcon;
