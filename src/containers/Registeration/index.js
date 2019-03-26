import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';
import { LoginCard } from '../../containers/Login/Login.style'
import { connect } from 'react-redux';
import { Button, Input, Radio } from 'antd';
import { register } from './registerAction';
import { createActionThunk, createAction } from '../../common/createAction';
import REGISTRATION_CONSTANTS from './registerConstants'
import {  createSession } from '../Login/loginAction'

const RadioGroup = Radio.Group;

export class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            gender: '',
            error: ''
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
        if (!isEmpty(this.props.registrationError)) {
            this.props.createAction(REGISTRATION_CONSTANTS.SET_REGISTRATION_ERROR, {})
        }
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                error: "Password and Confirm password doesn't match"
            })
            return;
        }
        if (!isEmpty(this.state.username) && !isEmpty(this.state.password) && !isEmpty(this.state.confirmPassword) && !isEmpty(this.state.gender)) {
            this.props.register({ username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, gender: this.state.gender }, this.props)
        }
    };

    render() {
        return (
            <LoginCard>
                {
                    <div>
                        <div style={{ marginBottom: 50 }}>
                            <p className="sign-in-text">Sign Up</p>
                        </div>
                        {
                            this.state.error && <span style={{ display: 'flex', justifyContent: 'center', fontSize: 14, color: '#FF3B30' }}>{this.state.error}</span>
                        }
                        {
                            this.props.registrationError && <span style={{ display: 'flex', justifyContent: 'center', fontSize: 14, color: '#FF3B30' }}>{this.props.registrationError.errorMessage}</span>
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
                            <div style={{ marginBottom: 30, position: 'retative' }}>
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
                            <div style={{ marginBottom: 30, position: 'retative' }}>
                                <p >Confirm Password</p>
                                <Input
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    type="password"
                                    onChange={this.updateInputValue}
                                    autoFocus
                                    style={{ width: '100%', height: 50 }}

                                />

                            </div>
                            <div style={{ marginBottom: 50, position: 'retative' }}>
                                <p >Gender</p>
                                <RadioGroup name="gender" onChange={this.updateInputValue}  >
                                    <Radio value='MALE'>Male</Radio>
                                    <Radio value='FEMALE'>Female</Radio>

                                </RadioGroup>

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }} >
                                <Button htmlType="submit">
                                    Register
                                </Button>
                            </div>
                        </form>

                    </div>
                }
            </LoginCard>
        )
    }

}
const mapStateToProps = state => ({
    registrationError: state.registration.registrationError,
    isAuthenticated: state.login.isAuthenticated    
});
export default withRouter(connect(mapStateToProps, {
    register,
    createActionThunk,
    createAction,
    createSession
})(Registration));
