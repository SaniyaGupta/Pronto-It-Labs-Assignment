import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { LoginCard } from './Login.style';
import { Button, Input } from 'antd';
import { isEmpty } from 'lodash'
import { login, createSession } from './loginAction'


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    componentDidMount() {
        if (!this.props.isAuthenticated) {
            let session = window.localStorage.getItem('session')
            session = JSON.parse(session);
            if (!isEmpty(session)) {
                this.props.createSession(session,this.props)
            }
        } else {
            window.location.replace('/users')
        }
    }
    updateInputValue = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = e => {
        e.preventDefault();
        if (!isEmpty(this.state.username) && !isEmpty(this.state.password)) {
            this.props.login({ username: this.state.username, password: this.state.password },this.props)
        }
    };

    renderLoginPage() {
        return (
            <LoginCard>
                {
                    <div>
                        <div style={{ marginBottom: 50 }}>
                            <p className="sign-in-text">Let's get started now</p>
                        </div>
                        {
                            !isEmpty(this.props.loginError) && <span style={{ display: 'flex', justifyContent: 'center', fontSize: 14, color: '#FF3B30' }}>{this.props.loginError.errorMessage}</span>
                        }
                        <form onSubmit={this.onSubmit}>

                            <div style={{ marginBottom: 30, position: 'retative' }} >
                                <p >Username</p>
                                <Input
                                    name="username"
                                    placeholder="Username"
                                    onChange={this.updateInputValue}
                                    style={{ width: '100%', height: 50 }}
                                />

                            </div>
                            <div style={{ marginBottom: 50, position: 'retative' }}>
                                <p >Password</p>
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.updateInputValue}
                                    autoFocus
                                    style={{ width: '100%', height: 50 }}

                                />

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }} >
                                <Button htmlType="submit">
                                    Sign In
                                </Button>
                            </div>
                        </form>
                        <Link to='/register'>
                            Register Now!
                        </Link>
                    </div>
                }
            </LoginCard>
        );
    }
    render() {
        return (
            <div>
                {this.renderLoginPage()}
            </div>
        );
    }

}
const mapStateToProps = state => ({
    loginError: state.login.loginError,
    isAuthenticated: state.login.isAuthenticated
});
export default withRouter(connect(mapStateToProps, {
    login,
    createSession
})(Login));