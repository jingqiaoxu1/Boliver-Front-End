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
                        I'm a paragraph. Click here to add your own text and edit me.<br />
                        I’m a great place for you to tell a story and let your users<br />
                        know a little more about you.
                </p>
                
            </header>
        )
    }
}