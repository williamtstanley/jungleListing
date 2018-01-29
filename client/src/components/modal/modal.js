import React, { Component } from 'react';
import { connect } from 'react-redux';
import uiActions from '../../reducers/uiActions';
import CircleClose from '../icons/circleClose';
import Style from './modal.scss';

@connect(
  ({ ui }, ownProps) => {
    return {
      isOpen: ui.modalOpen,
    }
  },
  (dispatch, ownProps) => ({
    onClose: () => dispatch(uiActions.toggleModal())
  })
)
export default class Modal extends Component {
  handleExitClick(e) {
    if (e.target.className === 'modal__backdrop') {
      this.props.onClose()
    }
  }
  render() {
    if (!this.props.isOpen) return null;

    return (
      <div
        className= 'modal__backdrop'
        onClick={(e) => this.handleExitClick(e)}
      >
        <div className='modal__container'>
          <CircleClose
            className="close__button"
            onClick={() => this.props.onClose()}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}


