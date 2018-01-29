import actionConstants from './actionConstants';
const merge = (...args) => Object.assign({}, ...args);

const {
  CREATE_NOTE,
  UPDATE_NOTE,
  ADD_NEW_PRODUCT,
} = actionConstants;

const handlers = {
  [CREATE_NOTE]: (state, action) => {
    return // some new state with new note
  },
  [UPDATE_NOTE]: (state, action) => {
    return // some new state with note updated
  },
  [ADD_NEW_PRODUCT]: (state, action) => {
    return merge(state, {
      products: [action.payload, ...state.products]
    })
  }
};

const initialState = {
  products: [
    {
      title: 'Sample Product',
      description: 'Description of the sample product',
      asin: 'B002QYW8LW',
      category: 'sampleCategory',
      rank: 'sampleRank',
      dim: {
        height: 24,
        width: 13,
      },
    },
  ],
};

export default (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};
