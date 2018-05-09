import React, {Component} from 'react';

export default class Button extends Component {

  toggleLoginState() {
    if(this.props.children === 'Login') {
      this.props.toggleLoginState(true)
    } else if(this.props.children === 'Logout') {
      this.props.toggleLoginState(false)
    } else {
      console.warn('Signup feature does not work yet!');
    }
  }

 render() {
    return (
      <button 
        className={this.props.className}
        onClick={() => this.toggleLoginState()}
      >
        {
          this.props.children 
        }
      </button>
    );
  }
}

