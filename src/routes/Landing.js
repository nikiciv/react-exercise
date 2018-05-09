import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div style={{padding: 10}}>
        <h1>Hello Modus Create</h1>
        <p>How are you?</p>
        <p>
          {'Below are two links for Home and UserList.'}
          {'In order to access the third route please press name,email or phone of one of the users.'}
        </p>
        <p>
          {'The '}
          <Link to="/home">Home</Link>
          {' page.'}
        </p>
        <p>
        {'The '}
          <Link to="/userlist">UserList</Link>
        {' page.'}
        </p>
        <p>Thank you and have a nice day :)</p>
      </div>
    );
  }
}
