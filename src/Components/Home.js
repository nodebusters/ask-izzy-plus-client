import React, { Component } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
// import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import history from '../history'

class Home extends Component {
    responseGoogle = (response) => {
        // console.log(response.tokenId);
        localStorage.setItem('token', response.tokenId);
        history.push('/dashboard')
    }

    errorGoogle = (response) => {
        console.log(response);
    }

    render() {
        return (
            <React.Fragment>
                <h1> Welcome </h1>
                <GoogleLogin
                    clientId="669994293807-m6evm3a161ms2e41bc6rb2c529tpqnv9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.errorGoogle}
                />
            </React.Fragment>
        );
    }
}
export default Home;





// ReactDOM.render(
//     <GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//     />,
//     document.getElementById('googleButton')
//     );