export const COLOR_HEADER = 'COLOR_HEADER';
export const COLOR_BODY = 'COLOR_BODY';
export const COLOR_NIFT = 'COLOR_NIFT';
export const COLOR_TEXT = 'COLOR_TEXT';

export function ChangeColorHeader(newColorHeader) {
  return ({
    type: COLOR_HEADER,
    newColorHeader,
  });
}

export function ChangeColorBody(newColorBody) {
  return ({
    type: COLOR_BODY,
    newColorBody,
  });
}

export function ChangeColorNift(newColorNift) {
  return ({
    type: COLOR_NIFT,
    newColorNift,
  });
}

export function ChangeColorText(newColorText) {
  return ({
    type: COLOR_TEXT,
    newColorText,
  });
}
