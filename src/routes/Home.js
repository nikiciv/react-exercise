import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopBar from '../components/TopBar';
import { HomeContent } from '../components/HomeContent';
import { toggleLoginState } from '../actions';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <TopBar 
          loggedIn={this.props.loggedIn}
          toggleLoginState={this.props.toggleLoginState}
        />
        <HomeContent
          loggedIn={this.props.loggedIn}
          toggleLoginState={this.props.toggleLoginState}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps, { 
  toggleLoginState
 })(Home);

