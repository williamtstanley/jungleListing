import actionConstants from './actionConstants';
const merge = (...args) => Object.assign({}, ...args);

const {
  TOGGLE_MODAL,
  TEXT_INPUT_CHANGE,
} = actionConstants;

const handlers = {
  [TOGGLE_MODAL]: (state, action) => {
    return merge(state, {
      modalOpen: !state.modalOpen,
    })  
  },
  [TEXT_INPUT_CHANGE]: (state, action) => {
    return merge(state, {
      inputs: merge(state.inputs, {
        [action.payload.fieldName]: action.payload.value,
      }),
    });
  }
};

const initialState = {
  title: 'Jungle Item List',
  inputs: {
    search: '',
  },
  productHeadings: [
    'ASIN',
    'Title',
    'Description',
    'Category',
    'Rank',
    'Dim',
  ],
};

export default (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};
