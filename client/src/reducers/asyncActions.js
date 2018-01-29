import actionConstants from './actionConstants';

const {
  ADD_NEW_PRODUCT,
  ADD_ALL_PRODUCTS,
} = actionConstants;

// this needs to be async actions stuff...

export default {
  getProduct: (fieldName) => (
    (dispatch, getState) => {
      const asin = getState().ui.inputs[fieldName];

      return fetch('http://localhost:56721/products/' + asin).then((res) => {
        if (!res.ok) {

        }
        console.log('res', res) 
        return res.json().then((result) => {
          dispatch({
            type: ADD_NEW_PRODUCT,
            payload: result,
          })
        }) 
      }).catch(console.log)
    }  
  ),
  getAllProducts: () => (
    (dispatch, getState) => {
      return fetch('http://localhost:56721/products').then((res) => {
        if (!res.ok) {

        }
        console.log('res', res) 
        return res.json().then((result) => {
          dispatch({
            type: ADD_ALL_PRODUCTS,
            payload: result,
          })
        }) 
      }).catch(console.log)
    }  
  )
}


