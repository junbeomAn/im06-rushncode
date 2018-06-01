
/* global opr, navigator, safari */
/* eslint func-names: 0 */
/* eslint wrap-iife: 0 */
// Opera 8.0+
export const isOpera = process.browser && ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0);

// Firefox 1.0+
export const isFirefox = process.browser && (typeof InstallTrigger !== 'undefined');

// Safari 3.0+ "[object HTMLElementConstructor]"
export const isSafari = process.browser && (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === '[object SafariRemoteNotification]'; })(!window.safari || (typeof safari !== 'undefined' && safari.pushNotification)));

// Internet Explorer 6-11
export const isIE = process.browser && (/* @cc_on!@ */false || !!document.documentMode);

// Edge 20+
export const isEdge = process.browser && (!isIE && !!window.StyleMedia);

// Chrome 1+
export const isChrome = process.browser && (!!window.chrome && !!window.chrome.webstore);