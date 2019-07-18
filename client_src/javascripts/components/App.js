import React from 'react';
import { connect } from 'react-redux';

import Person from './Person';

const mapStateToProps = function( state, ownProps ) {
  return state;
};

const App = function( props ) {
  return <div>
    <Person { ...props }/>
  </div>;
};

export default connect( mapStateToProps )( App );