import actionConstants from './actionConstants';

const {
  CREATE_NOTE,
  UPDATE_NOTE,
} = actionConstants;

const handlers = {
  [CREATE_NOTE]: (state, action) => {
    return // some new state with new note
  },
  [UPDATE_NOTE]: (state, action) => {
    return // some new state with note updated
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
