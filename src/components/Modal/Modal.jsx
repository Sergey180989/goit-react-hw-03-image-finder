import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from "../Modal/Modal.module.css";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("#modal-root")
export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImg: PropTypes.string.isRequired
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  };
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  };
  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleForCloseModal = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(<div className={s.overlay} onClick={this.handleForCloseModal}>
        <div className={s.modal}>
          <img src={this.props.largeImg} alt="photoImg"/>
        </div>
      </div>, modalRoot);
  }
}