import { Component } from 'react';
import s from "../Searchbar/Searchbar.module.css";
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
      value:""
  };
  static propTypes = {
    onSubmit:PropTypes.func
  }
    inputHandler = (e) => {
        this.setState({ value: e.target.value })
    };
    submitHandler = (e) => {
      e.preventDefault();
      if (this.state.value.trim() === "") {
        alert("Write something")
        return
      }
        this.props.onSubmit(this.state.value);        
        this.reset()
    };
    reset() {
        this.setState({ value: "" });
    };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form}>
          <button type="submit" className={s.button} onClick={this.submitHandler}>
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            className={s.input}
                    type="text"
                    value={this.state.value}
                    onChange={this.inputHandler}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}