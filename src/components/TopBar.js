import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { Initials } from './Initials';

export default class TopBar extends Component {
 
  render() {
    
    return (
      <header 
        className='topbar'
      >
        <div className='logo'>
          <Link to="/">
            <img 
              alt={'logo'} 
              className='logo-image' 
              src="favicon-196x196.png"
            />
          </Link>
        </div>
        <div>
          {'Modus Create'}
        </div>
        <div 
          className='topbar-left'
        />
        <div 
          className='topbar-right'
        >
          {
            this.props.loggedIn ?
              <div>
                <Initials />
                <Button 
                  className='basic-button topbar-logout-button'
                  toggleLoginState={this.props.toggleLoginState}
                >
                  Logout
                </Button>
              </div>
            : 
              <div>
                <Button 
                  className='basic-button topbar-login-button'
                  toggleLoginState={this.props.toggleLoginState}
                >
                  {this.props.loggedIn === true ? 'Logout' : 'Login'}
                </Button> 
                <Button className='basic-button topbar-signup-button'>Signup</Button> 
              </div>
          }  
        </div>
      </header>
    );
  } 
}

 

