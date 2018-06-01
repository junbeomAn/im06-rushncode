import { isEdge, isFirefox, isIE, isOpera, isSafari } from './index';

const BrowserDetect = () => {
  if (isEdge) {
    return 'Edge';
  } else if (isIE) {
    return 'Internet Explorer';
  } else if (isOpera) {
    return 'Opera';
  } else if (isFirefox) {
    return 'Firefox';
  } else if (isSafari) {
    return 'Safari';
  }
  return 'Extra browser';
};

export default BrowserDetect;
