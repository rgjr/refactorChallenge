import React, { Component } from 'react';
import moment from 'moment';
import TodoHeader from './Components/TodoHeader/TodoHeader';
import TodoList from './Components/TodoList/TodoList';
import TodoForm from './Components/TodoForm/TodoForm';
import Timer from './Components/Timer/Timer';
import './Styles/App.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: [], showTimer: false };
  }

  addItem(todoItem) {
    let todoItems = this.state.todoItems;

    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      date: moment().format('ll'),
      done: false
    });

    this.setState({ todoItems: todoItems });
  }

  removeItem(itemIndex) {
    let todoItems = this.state.todoItems;

    todoItems.splice(itemIndex, 1);

    this.setState({ todoItems: todoItems });
  }

  markTodoDone(itemIndex) {
    const todoItems = this.state.todoItems;
    let todo = todoItems[itemIndex];

    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);

    this.setState({ todoItems: todoItems });
  }

  render() {
    return (
      <div id="main">
        <TodoHeader />
        <button
          onClick={() => this.setState({ showTimer: !this.state.showTimer })}
        >
          Toggle Timer
        </button>
        {this.state.showTimer ? <Timer /> : null}
        <TodoList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp;
