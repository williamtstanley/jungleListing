import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(({ data }) => ({ products: data.products }))
export default class ProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <table className="products-table">
        <thead>
          <tr>
            {
              Object.keys(products[0]).map((key, index) => (
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
                <td>{title}</td>
                <td>{description}</td>
                <td>{asin}</td>
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
