import React from 'react';


export class TopBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img className="App-logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                <h1 className="App-name-Bo"><span className="App-name-liver">Bo</span>liver</h1>

                <p className="App-slogan">
                    You pick the location,
                    we will take care of the rest
                </p>

                <p className="App-introduction">
                    I'm a paragraph. Click here to add your own text and edit me. 
                    I’m a great place for you to tell a story and let your users 
                    know a little more about you.
                </p>
            </header>
        )
    }
}