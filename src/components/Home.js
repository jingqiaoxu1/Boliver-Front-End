import React from 'react';
import { Tabs } from 'antd';




export class Home extends React.Component {

    render() {
        const TabPane = Tabs.TabPane;

        function callback(key) {
            console.log(key);
        }
        return (
            <Tabs className="main-tabs" defaultActiveKey="1" onChange={callback}>
                <TabPane className="home" tab="Home" key="1">
                    <div className="infobox">
                        <img src={require('../assets/images/info1.jpg')} alt="info1" />   
                        <div className="blackblock">
                            <h2 className="title">About Us</h2>
                        </div>
                        <p className="text">
                            I'm a paragraph. Click here to add your own<br />
                            text and edit me. I’m a great place for you to<br /> 
                            tell a story and let your users know a little<br />
                            more about you.
                        </p>
                        <p className="text">
                            This is a great space to write long text about<br /> 
                            your company and your services. You can use<br /> 
                            this space to go into a little more detail about<br /> 
                            your company.
                        </p>
                    </div>
                    <div className="infobox">
                        <img src={require('../assets/images/info2.jpg')} alt="info2" />   
                        <div className="blackblock">
                            <h2 className="title">GroundRobot Delivers</h2>
                        </div>
                        <p className="text">
                            I'm a paragraph. Click here to add your own<br />
                            text and edit me. I’m a great place for you to<br /> 
                            tell a story and let your users know a little<br />
                            more about you.
                        </p>
                        <p className="text">
                            This is a great space to write long text about<br /> 
                            your company and your services. You can use<br /> 
                            this space to go into a little more detail about<br /> 
                            your company.
                        </p>
                    </div>
                    <div className="infobox">
                        <img src={require('../assets/images/info3.png')} alt="info2" /> 
                        <div className="blackblock">
                            <h2 className="title">Drone Delivers</h2>
                        </div>  
                        <p className="text">
                            I'm a paragraph. Click here to add your own<br />
                            text and edit me. I’m a great place for you to<br /> 
                            tell a story and let your users know a little<br />
                            more about you.
                        </p>
                        <p className="text">
                            This is a great space to write long text about<br /> 
                            your company and your services. You can use<br /> 
                            this space to go into a little more detail about<br /> 
                            your company.
                        </p>
                    </div>
                </TabPane>
                <TabPane tab="Ship" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Track" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="History" key="4">Content of Tab Pane 4</TabPane>
            </Tabs>

            
        )
    }
}