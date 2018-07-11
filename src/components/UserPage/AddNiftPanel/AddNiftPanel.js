import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AddNiftAction } from '../../../actions/AddNiftAction';
import './AddNiftPanel.scss';
// import TodoItems from './TodoItems';
import photoMin from '../../../icons/photo-min.png';

class AddNiftPanel extends Component {
  constructor(props) {
    super(props);
    // this.addItem = this.addItem.bind(this);
    this.state = {
      inputTweet: '',
      // items: [],
    };
  }

  handleInput = (e) => {
    this.setState({
      inputTweet: e.target.value,
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.AddNiftAction(this.props.uid, this.state.inputTweet);
  }

  // addItem(event) {
  //   if (this.inputElem.value !== '') {
  //     const newItem = {
  //       text: this.inputElem.value,
  //       key: Date.now(),
  //     };
  //     this.setState(prevState => ({
  //       items: prevState.items.concat(newItem),
  //     }));
  //   }
  //   this.inputElem.value = '';
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="addNiftPanel">
        <form onSubmit={e => this.submitForm(e)}>
        {/* <form onSubmit={ this.addItem }> */}
          <img src={photoMin} alt="" className="userMinIcon"/>
           {/* eslint-disable */}
          <input onChange={(e) => this.handleInput(e)} type="text" id="niftItput" name="niftText" placeholder="Write you nift ..."/>
          {/* <input ref={input => this.inputElem = input} type="text" id="niftItput" name="niftText" placeholder="Write you nift ..."/> */}
          <button type="submit">add</button>
        </form>
        {/* <TodoItems enteries={this.state.items}/> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  AddNiftAction: ( id, newItem ) => 
    dispatch(AddNiftAction( id, newItem )),
});

const mapStateToProps = state => ({
  inputTweet: state.addNiftReducer,
  uid: state.currentUser.uid,
});

AddNiftPanel.propTypes = {
  AddNiftAction: PropTypes.func,
  uid: PropTypes.string,
};

export default connect(mapStateToProps,mapDispatchToProps)(AddNiftPanel);

// exprot default AddNiftPanel;
