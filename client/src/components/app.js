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
  ({ ui, data }) => ({
    title: ui.title,
    searchText: ui.inputs && ui.inputs.search,
    loading: !data.products.length,
  }),
  (dispatch) => ({
    textInputChange: (val) => dispatch(uiActions.textInputChange('search', val)),
    getProduct: () => {
      dispatch(uiActions.toggleModal())
      dispatch(asyncActions.getProduct('search'))
    },
    getAllProducts: () => {
      dispatch(asyncActions.getAllProducts())
    }
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
  componentDidMount() {
    this.props.getAllProducts();
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

