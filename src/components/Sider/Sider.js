import React, { Component } from 'react';
import './Sider.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Sider extends Component {
  render() {
    const styleHead = {
      backgroundColor: this.props.colorHeader,
    };
    const styleBody = {
      backgroundColor: this.props.colorBody,
    };
    return (
      <div className='siders' style={styleBody}>
          <div className = "headerPart" style={styleHead}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colorHeader: state.colorReducer.colorHeader,
  colorBody: state.colorReducer.colorBody,
});

Sider.propTypes = {
  colorHeader: PropTypes.string,
  colorBody: PropTypes.string,
};

export default connect(mapStateToProps)(Sider);
