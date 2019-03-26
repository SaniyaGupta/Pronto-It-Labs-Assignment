import { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Users from '../Users/index';
import Header from '../Header'
export class DefaultContainer extends Component {

    render() {
        return (
            <div>
                {!this.props.isAuthenticated ?
                    <Redirect to="/login" />
                    :
                    <div>
                        <Header />
                        <Switch>
                            <Route exact="true" path="/" component={Users} />
                            <Route path="/users" component={Users} />
                        </Switch>
                    </div>
                }
            </div>

        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated,
});
export default connect(mapStateToProps, {})(DefaultContainer);
