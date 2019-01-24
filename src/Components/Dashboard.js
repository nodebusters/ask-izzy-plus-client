import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    state = {};

    handleProtectedRequest = (e) => {
        const token = localStorage.getItem('token');

        if (token) {
            // console.log(token);
            // const baseURL =  process.env.REACT_APP_URL;
    
            const url = `http://localhost:5000/protected/getUserData`

            //here we are sending the token to the server.
            const options = {
                headers: { token }
            }
        // const token = localStorage.getItem('token')
            axios.get(url,options)
                .then(res => {
                    console.log('res.data', ': ', res.data);
                })
    
        } else {
            console.log("doesnt exists");
            
            this.setState({ error: "token error" })
        }
    }

    componentDidMount(){
        this.handleProtectedRequest();
    }
    
    render() {
        const {message} = this.state;
        return (
            <React.Fragment>
                <h1> Welcome </h1>
                {/* {message && <h1> {message} </h1>} */}
            </React.Fragment>
        );
    }
}
export default Dashboard;