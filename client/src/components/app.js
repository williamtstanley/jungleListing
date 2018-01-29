import React, { Component } from 'react';
import { connect } from 'react-redux';
import uiActions from '../reducers/uiActions';
import asyncActions from '../reducers/asyncActions';
import Spinner from './statusIndicators/spinner';
import ProductsTable from './product/productsTable';
import ProductLookUp from './product/productLookup';
import Modal from './modal/modal';
import appStyle from './app.scss';


@connect(
  ({ ui }) => ({
    title: ui.title,
    loading: ui.loading,
    searchText: ui.inputs && ui.inputs.search,
  }),
  (dispatch) => ({
    textInputChange: (val) => dispatch(uiActions.textInputChange('search', val)),
    getProduct: () => {
      dispatch(uiActions.toggleModal())
      dispatch(asyncActions.getProduct('search'))
    },
  })
)
export default class App extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.getProduct();
  }
  handleChange(e) {
    this.props.textInputChange(e.target.value)
  }

  render() {
    const { loading, title, modalOpen } = this.props;
    return loading
      ? <Spinner />
      : (
        <div className='app-container'>
          <h1 className="title-block">{title}</h1>
          <ProductLookUp />
          <Modal name='addItem' >
            <form
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <input
                type='text'
                name='asin'
                placeholder="Enter ASIN"
                value={this.props.searchText}
                onChange={(e) => this.handleChange(e)}
              />
              <input type='submit'/>
            </form>
          </Modal>
          <ProductsTable />
        </div>
      )
  }
}

