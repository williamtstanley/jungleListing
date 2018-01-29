import React, { Component } from 'react';
import { connect } from 'react-redux';
import Style from './modal.scss';

@connect(
  ({ ui }, ownProps) => ({
    isOpen: ui.modals[ownProps.name],
  }),
  (dispatch, ownProps) => ({
    // onClose: () => dispatch(uiActions.toggleModal(ownProps.name))
  })
)
export default class Modal extends Component {
  handleExitClick(e) {
    if (e.target.className === 'modal__backdrop') {
      this.props.onClose()
    }
  }
  render() {
    // if (!this.props.isOpen) return null;

    return (
      <div
        className= 'modal__backdrop'
        onClick={(e) => this.handleExitClick(e)}
      >
        <div className='modal__container'>
          <div className="header">
            <i 
              onClick={this.props.onClose}
              className="fa fa-times close-icon"
            >
            </i>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


