import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorHeader: '#f00000',
      colorBody: '#f00000',
      colorText: '#f00000',
      colorNifts: '#f00000',
    };
    this.handlerChangeHeader = this.handlerChangeHeader.bind(this);
    this.handlerChangeBody = this.handlerChangeBody.bind(this);
    this.handlerChangeText = this.handlerChangeText.bind(this);
    this.handlerChangeNifts = this.handlerChangeNifts.bind(this);
  }
  
  handlerChangeHeader(event) {
    this.setState({
      colorHeader: event.target.value,
    });
  }

  handlerChangeBody(event) {
    this.setState({
      colorBody: event.target.value,
    });
  }

  handlerChangeText(event) {
    this.setState({
      colorText: event.target.value,
    });
  }

  handlerChangeNifts(event) {
    this.setState({
      colorNifts: event.target.value,
    });
  }
  
  render() {
    return (
    <div className= "setingsContainer" >
      <div className= "colorSheme">
        <input type="color" id="head" value={this.state.colorHeader} onChange={this.handlerChangeHeader}/>
        <input type="color" id="body" value={this.state.colorBody} onChange={this.handlerChangeBody}/>
        <input type="color" id="text" value={this.state.colorText} onChange={this.handlerChangeText}/>
        <input type="color" id="nifts" value={this.state.colorNifts} onChange={this.handlerChangeNifts}/>
      </div>
      <h2>Sign Out</h2>
    </div>
    );
  }
}
Settings.propTypes = {
  handlerChangeHeader: PropTypes.func,
  handlerChangeBody: PropTypes.func,
  handlerChangeText: PropTypes.func,
  handlerChangeNifts: PropTypes.func,
};

export default Settings;
