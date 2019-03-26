import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { deleteSession } from '../Login/loginAction'

export class Header extends Component {
    handleLogout = () => {
        this.props.deleteSession()
    }
    render() {
        return (
            <ul style={{ listStyleType: "none", marginBottom: 50, padding: 0, overflow: "hidden", backgroundColor: " #333", height: 50 }}>
                <li style={{ float: "right",margin:10 }}><Button style={{ padding:5 }}onClick={this.handleLogout}>Logout</Button></li>
            </ul>
        )
    }
}

const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {
    deleteSession
})(Header);
