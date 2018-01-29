import actionConstants from './actionConstants';

const {
  ADD_NEW_PRODUCT,
} = actionConstants;

// this needs to be async actions stuff...

export default {
  getProduct: (fieldName) => (
    (dispatch, getState) => {
      const asin = getState().ui.inputs[fieldName];

      return fetch('/localhost:9999/products/' + asin).then((res) => {
        if (!res.ok) {

        }
        
        return res.json().then((result) => {
          dispatch({
            type: ADD_NEW_PRODUCT,
            payload: result,
          })
        }) 
      }).catch(() => {
          // this until backend to finish tests
          dispatch({
            type: ADD_NEW_PRODUCT,
            payload: {
              title: 'Sample Product',
              description: 'Description of the sample product',
              asin: asin,
              category: 'sampleCategory',
              rank: 'sampleRank',
              dim: {
                height: 24,
                width: 13,
              },
            },
          })
      })
    }  
  )
}


