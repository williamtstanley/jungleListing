import React, { Component } from 'react';
import CirclePlus from '../icons/circlePlus';
import Style from './productLookup.scss'
import Tooltip from '../tooltip/tooltip';

export default class ProductLookup extends Component {
  render() {
    return (
      <Tooltip
        tip={<div>Click to add a product to the watch list</div>}
        className="circleplus__addAction"
      >
        <CirclePlus
          onClick={() => console.log('clicked')}
        />  
      </Tooltip>
    );
  }
}
