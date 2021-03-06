import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: 'f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
      }
  };
  markComplete = (e) => {
    this.completed = true
  }
  render () {
    const {id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
        {' '}
        {this.props.todo.title}
        {' '}
        {' '}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

//button styling css
const btnStyle = {
  color: '#fff',
  background: '#ff0000',
  padding: '5px 8px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;

