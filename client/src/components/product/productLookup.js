import React, { Component } from 'react';
import { connect } from 'react-redux';
import CirclePlus from '../icons/circlePlus';
import Style from './productLookup.scss'
import Tooltip from '../tooltip/tooltip';

@connect(undefined, (dispatch) => ({
  handleClick: () => dispatch({
    type: 'TOGGLE_MODAL',
  })
}))
export default class ProductLookup extends Component {
  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <Tooltip
        tip={<div>Click to add a product to the watch list</div>}
        className="circleplus__addAction"
      >
        <CirclePlus
          onClick={() => this.handleClick()}
        />  
      </Tooltip>
    );
  }
}
