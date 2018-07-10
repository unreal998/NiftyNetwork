import {
  COLOR_HEADER, COLOR_BODY, COLOR_NIFT, COLOR_TEXT,
} from '../actions/changeColor';

const initialColor = {
  colorHeader: '#ffffff',
  colorNift: '#ffffff',
  colorBody: '#e4ecf0',
  colorText: '#000000',
};

const colorReducer = (state = initialColor, action) => {
  switch (action.type) {
    case COLOR_HEADER:
      return { ...state, colorHeader: action.newColorHeader };
    case COLOR_BODY:
      return { ...state, colorBody: action.newColorBody };
    case COLOR_NIFT:
      return { ...state, colorNift: action.newColorNift };
    case COLOR_TEXT:
      return { ...state, colorText: action.newColorText };
    default:
      return state;
  }
};

export default colorReducer;
