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
  title: 'Jungle Item List',
  loading: false,
  modals: {},
};

export default (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};
