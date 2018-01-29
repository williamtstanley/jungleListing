import React, { Component } from 'react';
import { connect } from 'react-redux';
import productsTable from './productsTable.scss';

@connect(({ data, ui }) => ({
  products: data.products,
  productHeadings: ui.productHeadings,
}))
export default class ProductTable extends Component {
  render() {
    const { products, productHeadings } = this.props;
    return (
      <table className="products-table">
        <thead>
          <tr>
            {
              this.props.productHeadings.map((key, index) => (
                <th key={`${key}::${index}`}>{key.toUpperCase()}</th>
              ))
            } 
          </tr>
          </thead>
        <tbody>
          {
            products.map((
              {
                asin,
                title,
                description,
                category,
                rank,
                dim,
              }
            ) => (
              <tr key={asin}>
                <td>{asin}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{rank}</td>
                <td>
                  <ul>
                    <li>height: {dim.height}</li>
                    <li>width: {dim.width}</li>
                  </ul>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

        // <TeamDetailHeader title={this.props.title} /> 
