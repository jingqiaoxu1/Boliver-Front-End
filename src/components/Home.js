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
                <TabPane tab="Home" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Ship" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Track" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="History" key="3">Content of Tab Pane 4</TabPane>
            </Tabs>
        )
    }
}