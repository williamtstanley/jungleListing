import actionConstants from './actionConstants';
const {
  TOGGLE_MODAL,
  TEXT_INPUT_CHANGE,
} = actionConstants;

export default {
  toggleModal: (name) => ({
    type: TOGGLE_MODAL, 
  }),
  textInputChange: (fieldName, value) => ({ 
    type: TEXT_INPUT_CHANGE, 
    payload: {
      fieldName,
      value
    }
  })
}
