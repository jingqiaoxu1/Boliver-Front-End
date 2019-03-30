import React from 'react';
import { Icon } from 'antd';

export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">

                <div className="App-logo">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                    <h1 className="App-name-Bo"><span className="App-name-liver">Bo</span>liver</h1>
                    <Icon className="logout" type="logout" />{' '}Logout
                </div>

                <div className="App-text">
                    <p className="Large-font">
                        You pick the location,<br />
                        we will take care of the rest<br />
                    </p>
                    <p className="Small-font">
                        Our mission is to improve lifestyles by making delivery instant<br />
                        for everyone. We're the first robot delivery service in the world<br />
                        and we’re pioneering an industry, not just a company.
                    </p>
                </div>
                

                {/* {this.props.isLoggedIn ?
                        <a className="logout" onClick={this.props.handleLogout} >
                            <Icon type="logout" /> <h1>Logout</h1>
                         </a> : null} */}
                
               

            </header>
        )
    }
}

