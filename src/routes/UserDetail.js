import React, { Component } from 'react';
import { usersRef } from '../firebase';

export class UserDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            photo: ''
        }
    }
 
    goBack() {
        this.props.history.push('/userlist');
        //remove database entries
        usersRef.set([]);
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    componentDidMount() {
        usersRef.on('value', snap => {
            snap.forEach(user => {
                const {id, firstName, lastName, email, phone, photo} = user.val();
                if(id === this.props.match.params.id) {
                    this.setState({
                        firstName,
                        lastName,
                        email,
                        phone,
                        photo
                    })
                }
            });
        });
    }
    
    render() {
        
        return(
            <div >
                <button
                  className='go-back-button'
                  onClick={() => this.goBack()}
                >
                    <i className="fas fa-arrow-left"></i> Back
                </button>
                <div 
                  className='user-detail-card'
                >
                    <div className='user-detail-photo-div'> 
                        <img 
                            alt={'logo'}
                            className='user-photo'  
                            src={this.state.photo}
                        />
                    </div >
                    <div 
                        className='user-detail-info'
                    >
                        First Name: {this.capitalizeFirstLetter(this.state.firstName)}
                    </div >
                    <div 
                        className='user-detail-info'
                    >
                        Last Name: {this.capitalizeFirstLetter(this.state.lastName)}
                    </div >
                    <div 
                        className='user-detail-email'
                    >
                        Email: {this.state.email}
                    </div >
                    <div 
                        className='user-detail-info'
                    >
                        Phone: {this.state.phone}
                    </div >
                </div >
            </div >
        )
    }
}