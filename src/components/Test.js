// This component just used for testing.
import React from 'react';

export default (props) => {
  console.log('Test props:');
  console.log(props);
  return (
    <div>
      <h1>This is a test</h1>
      <button onClick={props.loginRequest}>Login</button>
    </div>
  )
}
