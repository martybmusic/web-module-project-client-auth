import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: 'Lambda',
            password: 'Sch00l'
        }
    };

    handleChange = evt => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [evt.target.name]: evt.target.value
            }
        })
    };

    login = evt => {
        evt.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <div>
                        <label>username:</label>
                            <input
                                type='text'
                                name='username'
                                placeholder='username'
                                value={this.state.credentials.username}
                                onChange={this.handleChange}
                            />
                        <label>password:</label>
                            <input
                                type='text'
                                name='password'
                                placeholder='password'
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />
                    </div>
                    <br />
                    <button>LOG IN</button>
                </form>
            </div>
        )
    }
}

export default Login;