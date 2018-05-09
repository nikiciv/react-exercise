import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'node-uuid';
import { usersRef } from '../firebase';
import { 
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersError 
} from '../actions';

class UserList extends Component {

  // Handle HTTP errors since fetch won't.
  handleHTTPErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  goToUserDetailPage(id, user) {
    this.props.history.push('/userdetail/' + id);
    usersRef.push(user);
  }

  fetchData() {
    this.props.fetchUsersBegin();
    fetch('https://randomuser.me/api/?results=20')
      .then(res => this.handleHTTPErrors(res))
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.results.map(user => (
        {
          firstName: `${user.name.first}`,
          lastName: `${user.name.last}`,
          email: `${user.email}`,
          phone: `${user.cell}`,
          photo: `${user.picture.large}`,
          id: v4()
        }
      )))
     .then(users => {
       this.props.fetchUsersSuccess(users)
      })
     .catch(error => this.props.fetchUsersError(error))
  }

  componentDidMount() {
    this.fetchData();
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() { 

    const { error, loading, users } = this.props;
    
    if (error) {
      return <h2 className='error-message'>Error! {error.message}</h2>;
    }

    if (loading) {
      return <div className='fa-3x spinner'><i className="fas fa-spinner fa-pulse"></i></div>;
    }

    return (
      <div className='user-list-background'>
        <div className='fetch-users-text'>Hello Modus Create,do you want to fetch some other users ?</div>
        <button
          className='fetch-users-button'
          onClick={() => this.fetchData()}
        >
          Fetch users
        </button>
        <div className='fetch-users-text'>Please click on user's name,email or phone for more details.</div>
        <ul className='user-list'>
            {
                users.map(user => (
                  <li key={user.id} className="list-item">
                    <div 
                      className='user-name'  
                      onClick={() => this.goToUserDetailPage(user.id, user)}
                    >
                      <i className="fas fa-user"></i>{this.capitalizeFirstLetter(user.firstName) + ' ' + this.capitalizeFirstLetter(user.lastName)}
                    </div>
                    <div 
                      className='user-email' 
                      onClick={() => this.goToUserDetailPage(user.id, user)}
                    >
                      <i className="fa fa-envelope" aria-hidden="true"></i>{ user.email}
                    </div>
                    <div 
                      className='user-phone'
                      onClick={() => this.goToUserDetailPage(user.id, user)}
                    >
                      <i className="fas fa-phone"></i>{user.phone}
                    </div>
                  </li>
                ))
            }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps, { 
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersError 
 })(UserList);



         