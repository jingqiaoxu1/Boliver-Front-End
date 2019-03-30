import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import { Home } from './Home';
import { Link, Switch, Route } from 'react-router-dom';

export class Main extends React.Component {
    getLogin = () => {
        return <Login handleLogin={this.props.handleLogin}/>
    }
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" render={this.getLogin} />
                    <Route path="/home" component={Home} />
                    <Route render={this.getLogin} />
                </Switch>

                <Link to="/register">Register</Link><br />
                <Link to="/login">Login</Link><br />
                <Link to="/home">Home</Link>
            </div>
        )
    }
 }
 
