import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from './usersAction'
import { Table } from 'antd';

export class Users extends Component {
    columns = [{
        title: 'Username',
        dataIndex: 'userName',
        width: 250,
    }, {
        title: 'Password',
        dataIndex: 'password',
        width: 250,
    }, {
        title: 'Gender',
        dataIndex: 'gender',
    }];

    componentDidMount() {
        this.props.getUserData(this.props.paginationDetails.currentPage,
            this.props.paginationDetails.currentPageSize,
            this.props.token)
    }

    render() {
        return (

            <Table size="large" style={{ margin: 50, overflowY: 'scroll', height: window.innerHeight }} columns={this.columns} dataSource={this.props.userData} pagination={false}
                bordered
            />

        )
    }

}
const mapStateToProps = state => ({
    token: state.login.session.token,
    paginationDetails: state.users.paginationDetails,
    userData: state.users.userData
});
export default connect(mapStateToProps, {
    getUserData
})(Users);
