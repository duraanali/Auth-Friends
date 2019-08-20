import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Dashboard extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends/')
            .then(res => {
                const friendsList = res.data;
                this.setState({ friendsList });
                this.props.history.push('/');
            })
            .catch(err => console.log(err.response));
    };

    render() {

        return (
            <div>
                <ul>
                    {this.state.friendsList.map(friend =>
                        <li>{friend.name}</li>)}
                </ul>
            </div>
        );
    }
}

export default Dashboard;
