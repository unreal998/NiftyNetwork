import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {
  createTask(items) {
    console.log(this);
    return <li key={ items.key }> {items.text}</li>;
  }

  render() {
    const todoEnteries = this.props.enteries;
    const listItems = todoEnteries.map(this.createTask);
    return (
      <ul className="theList">
      {listItems}
      </ul>
    );
  }
}
TodoItems.propTypes = {
  enteries: PropTypes.array,
};

export default TodoItems;
