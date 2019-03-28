import React from 'react';


export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img className="App-logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                <h1 className="App-name-Bo"><span className="App-name-liver">Bo</span>liver</h1>

                <p className="App-introduction">
                    <span className="App-slogan">
                        You pick the location,<br />
                        we will take care of the rest<br />
                    </span>

                        Our mission is to improve lifestyles by making delivery instant<br />
                        for everyone. We're the first robot delivery service in the world<br />
                        and we’re pioneering an industry, not just a company.
                </p>
                
                <img className="App-background1" src={process.env.PUBLIC_URL + '/background1.jpg'} alt="background1" />
                
            </header>
        )
    }
}

