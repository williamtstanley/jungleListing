import actionConstants from './actionConstants';
const merge = (...args) => Object.assign({}, ...args);

const {
  ADD_NEW_PRODUCT,
  ADD_ALL_PRODUCTS,
} = actionConstants;

const handlers = {
  [ADD_NEW_PRODUCT]: (state, action) => {
    return merge(state, {
      products: [action.payload, ...state.products]
    })
  },
  [ADD_ALL_PRODUCTS]: (state, action) => {
    return merge(state, { products: action.payload })
  },
};

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};
