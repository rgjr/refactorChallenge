import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItemValue: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    let newItemValue = this.state.newItemValue.trim();

    if (newItemValue) {
      this.props.addItem({ newItemValue });

      this.setState({
        newItemValue: ''
      });

      event.target.reset();
    }
  }

  handleChange(event) {
    this.setState({
      newItemValue: event.target.value
    });
  }

  render() {
    return (
      <form id="todoForm" onSubmit={this.onSubmit} className="form-inline">
        <input
          autoFocus
          type="text"
          id="itemName"
          className="form-control"
          placeholder="add a new todo..."
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
