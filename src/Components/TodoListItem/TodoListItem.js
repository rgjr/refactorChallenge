import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickClose() {
    let index = parseInt(this.props.index, 10);

    this.props.removeItem(index);
  }

  onClickDone() {
    let index = parseInt(this.props.index, 10);

    this.props.markTodoDone(index);
  }

  render() {
    let { item } = this.props;
    let todoClass = item.done ? 'todoItem done' : 'todoItem undone';

    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          />
          <span>{item.value}</span>
          <span className="date">{`Added: ${item.date}`}</span>
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
