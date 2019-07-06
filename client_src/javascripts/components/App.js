import React from 'react';
import Person from './Person';

export default function App( props ) {
  return <div>
    <Person { ...props }/>
  </div>
}