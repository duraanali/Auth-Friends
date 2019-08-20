import React from 'react'
import './LoginForm.css';

import axios from 'axios';

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/');
            })
            .catch(err => console.log(err.response));
    };

    render() {

        return (
            <div className="form-module">
                <h2>Sign In</h2>
                <form className="loginForm" onSubmit={this.login}>

                    <input className="zr_un_email valid" type="username" name="username" placeholder="username" value={this.state.credentials.username}
                        onChange={this.handleChange} />


                    <input type="password" name="password" placeholder="Password" value={this.state.credentials.password}
                        onChange={this.handleChange} />

                    <button type="submit">Sign In</button>

                </form>

                <div>

                </div>
            </div>

        );
    }
}


export default LoginForm;
