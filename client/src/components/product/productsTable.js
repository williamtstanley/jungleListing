import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(({ data }) => ({ products: data.products }))
export default class ProductTable extends Component {
  render() {
    return (
      <ul>
        {
          this.props.products.map((
            {
              asin,
              title,
              description,
              category,
              rank,
              dim,
            }
          ) => (
            <li key={asin}>
              <span>ASIN: {asin}</span>
              <span>TITLE: {title}</span>
              <span>DESCRIPTION: {description}</span>
              <span>CATEGORY: {category}</span>
              <span>RANK: {rank}</span>
              <span>HEIGHT: {dim.height}</span>
              <span>WIDTH: {dim.width}</span>
            </li>
          ))
        }
      </ul>
    )
  }
}

