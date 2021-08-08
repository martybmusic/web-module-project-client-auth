import React from 'react';

import AxiosWithAuth from '../utils/AxiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: {
            id: '',
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        AxiosWithAuth()
            .get("/api/friends")
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => {
                    <div key={friend.id}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                })}
            </div>
        )
    }
}

export default FriendsList;