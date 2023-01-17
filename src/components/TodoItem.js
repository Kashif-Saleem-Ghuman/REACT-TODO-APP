/* eslint-disable */
import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
        {this.props.todo.title}
      </li>
    );
  }
}
