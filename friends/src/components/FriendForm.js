import React from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

class FriendForm extends React.Component {
    state = {
        friend: []
    };

    handleChange = evt => {
        this.setState({
            friend: {
                ...this.state.friend,
                [evt.target.name]: evt.target.value,
                id: Date.now()
            }
        });
    };

    submit = evt => {
        evt.preventDefault();
        AxiosWithAuth()
            .post('/api/friends', this.state.friend)
            .then(res => {
                this.props.history.push('/friends');
            })
            .catch(error => {
                console.log(error);
            })
    };

    render () {
        return (
                <div>
                    <form onSubmit={this.submit}>
                        <div>
                            <label>Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="name"
                                value={this.state.friend.name}
                                onChange={this.handleChange}
                            />
                            <label>Age:</label>
                            <input 
                            type="age" 
                            name="age" 
                            placeholder="Age"
                            value={this.state.friend.age}
                            onChange={this.handleChange}
                            />
                            <label>Email:</label>
                            <input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.friend.email}
                            onChange={this.handleChange}
                            />
                        </div>
                        <button>ADD FRIEND</button>
                    </form>
                </div>
        );
    }
}

export default FriendForm;