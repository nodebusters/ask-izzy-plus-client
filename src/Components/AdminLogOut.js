import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
// import axios from 'axios';
import history from '../history';

class LogOut extends Component {
  logout = () => {
    // console.log(response.tokenId);
    localStorage.setItem('token', '');
    history.push('/admin')
  }

  render() {
    return (
      <React.Fragment>
        {/* If window.gapi exist that means the session still active, thus we can render the GoogleLogout component */}
        {window.gapi
          &&
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            render={renderProps => (
              <button onClick={renderProps.onClick} className="logout-button header-link">Logout</button>
            )}>
          </GoogleLogout>
        }

        {!window.gapi
          &&
          <div onClick={this.logout} className="logout-button header-link">
            Logout
          </div>
        }
      </React.Fragment>
    );
  }
}

export default AdminLogOut;