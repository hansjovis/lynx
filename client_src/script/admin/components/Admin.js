import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = function( state ) {
  return state;
};

const Admin = function( props ) {
  return (
    <h1>Hello { props.name }!</h1>
  );
};



export default connect( mapStateToProps )( Admin );