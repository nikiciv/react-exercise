import React from 'react';
import Button from './Button';

export const HomeContent = (props) => {
  return (
    <Button
      className='basic-button'
      toggleLoginState={props.toggleLoginState}
    >
      {props.loggedIn === true ? 'Logout' : 'Login'}
    </Button>
  );
}



