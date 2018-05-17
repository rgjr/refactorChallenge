import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.itemName = null;

    this.itemNameRef = e => {
      this.itemName = e;
    };

    this.onSubmit = this.onSubmitForm.bind(this);
  }

  handleChange(event) {
    let text = event.target.value;

    this.setState({
      value: text
    });
  }

  onSubmitForm(event) {
    console.log(event.target.value);

    event.preventDefault();

    let newItemValue = event;

    if (newItemValue) {
      this.props.addItem({ newItemValue });

      //this.todoForm.reset();
    }
  }

  render() {
    return (
      <form
        ref={'todoForm'}
        id="todoForm"
        onSubmit={event => this.onSubmitForm(event)}
        className="form-inline"
      >
        <input
          autoFocus
          type="text"
          ref={this.itemNameRef}
          id="itemName"
          className="form-control"
          placeholder="add a new todo..."
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
