import { getLanguage } from './language';

const locale = {
  id: 'id-ID',
  en: 'en-EN'
};

export const formatDate = (dateString = null) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(locale[getLanguage()], {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });
  return formattedDate;
};

export const formatPreviewDate = (dateString = null) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(locale[getLanguage()], {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
  return formattedDate;
};

export const dateToTimeSeconds = (dateString = null) => {
  const date = new Date(dateString);
  if (isNaN(date)) {
    return Math.round(Date.now() / 1000);
  }
  return Math.round(date / 1000);
};

export const formatStringToColor = (str) => {
  let hash = 0;
  str.split('').forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let color = '';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += value.toString(16).padStart(2, '0');
  }
  return {
    color: color,
    hex: '#' + color
  };
};

const hexToRgb = (hex) => {
  const hexCode = hex.charAt(0) === '#' ? hex.substr(1, 6) : hex;

  const hexR = parseInt(hexCode.substr(0, 2), 16);
  const hexG = parseInt(hexCode.substr(2, 2), 16);
  const hexB = parseInt(hexCode.substr(4, 2), 16);
  return {
    red: hexR,
    green: hexG,
    blue: hexB
  };
};

const rgbContrastColor = ({ red, green, blue }) => {
  // Gets the average value of the colors
  const contrastRatio = (red + green + blue) / (255 * 3);
  return contrastRatio >= 0.5 ? '000000' : 'ffffff';
};

export const formatStringToAvatar = (str) => {
  const { color } = formatStringToColor(str);
  const fontColor = rgbContrastColor(hexToRgb(color));
  return {
    background: color,
    text: fontColor
  };
};

export const roundTo = (n, digits, rounding = 'round') => {
  var negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));

  if (rounding === 'floor') {
    n = Math.floor(n) / multiplicator;
  } else if (rounding === 'ceil') {
    n = Math.ceil(n) / multiplicator;
  } else {
    n = Math.round(n) / multiplicator;
  }

  n.toFixed(digits);

  if (negative) {
    n = (n * -1).toFixed(digits);
  }
  return n;
};

// format number to rupiah
export const rupiah = new Intl.NumberFormat('id-iD', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0
});

export const thousandSeparator = (value, separator = ',') => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const preventPhoneFormat = (e) => {
  e.target.value = e.target.value.replaceAll(/[^+0-9]+/g, '');
  return e;
};

export const numberOnlyFormat = (e) => {
  e.target.value = e.target.value.replaceAll(/[^0-9]+/g, '');
};

export const dateInPast = function (date) {
  const currentDate = new Date();
  const givenDate = new Date(date);

  if (givenDate < currentDate) {
    return true;
  }

  return false;
};

export const capitalize = function (string) {
  return (string && string[0].toUpperCase() + string.slice(1)) || '';
};
