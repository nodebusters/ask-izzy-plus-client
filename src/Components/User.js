import React, { Component } from 'react';
class User extends Component {
    render() {
        const { user } = this.props
        return (
            <React.Fragment>
                {Object.entries(user).map(([key, value]) => {
                    return <p key={key}>{key}: {value}</p>
                })}
            </React.Fragment>
        );
    }
}
export default User;