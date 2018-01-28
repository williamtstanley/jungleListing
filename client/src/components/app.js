import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from './statusIndicators/spinner';
import ProductsTable from './product/productsTable';
import ProductLookUp from './product/productLookup';
import appStyle from './app.scss';


@connect(({ ui }) => {
  return {
    title: ui.title,
    loading: ui.loading,
  }
})
export default class App extends Component {
  render() {
    const { loading, title } = this.props;
    return loading
      ? <Spinner />
      : (
        <div className='app-container'>
          <h1 className="title-block">{title}</h1>
          <ProductLookUp />
          <ProductsTable />
        </div>
      )
  }
}

