import React from 'react';
import { Timeline, Tooltip, Progress } from 'antd';

export class TrackTimeline extends React.Component {

    getTimeline = () => {
        const { orderStatus, e_arrival } = this.props.currentorder;
        console.log(orderStatus);
        if (orderStatus == 0) {
            return (
                <div>
                    <Tooltip title="Delivered">
                        <p className="textStyle">
                            Your package has been delivered at {e_arrival}<br />
                            Please hit "Confirm Order" button to complete your order.
                        </p>
                        <Progress percent={100} successPercent={100} />
                    </Tooltip>

                </div>
                
            )} else if (orderStatus == 1) {
            return (
                <div>
                    <Tooltip title="In transit">
                        <p className="textStyle">
                            Your package is on the way.<br />
                            It is estimated to be delivered at {e_arrival}.
                        </p>
                        <Progress percent={66} successPercent={33} />
                        
                    </Tooltip>
                </div>
            )} else if (orderStatus == 2) {
            return (
                <div>
                    <Tooltip title="Retriving package">
                        <p className="textStyle">
                            Robot is on its way to pick up your package. <br />
                            Your package is extimated to be delivered at {e_arrival}.
                        </p>
                        
                        <Progress percent={33} successPercent={33} />
                    </Tooltip>

                </div>
                
            )} else {
                return (<p>Your order has been canceled or successfully delivered. Please check your order in orderHistory.</p>)
            }
        }
    
    render() {
        return (
            <div>{this.getTimeline()}</div>
        )
    }
}


/** timeline

import React from 'react';
import { Timeline } from 'antd';

export class TrackTimeline extends React.Component {
    
    getTimeline = () => {
        const orderStatus = this.props.currentorder.orderStatus;
        console.log(orderStatus);
        if (orderStatus == 0) {
            return (
                <Timeline>
                    <Timeline.Item color="red"> 
                        Delivered
                    </Timeline.Item>
                    <Timeline.Item color="black">
                        In transit
                    </Timeline.Item>
                    <Timeline.Item color="black">
                        Retreiving package
                    </Timeline.Item>
                </Timeline>
            )} else if (orderStatus == 1) {
            return (
                <Timeline>
                    <Timeline.Item color="red">
                        In transit
                    </Timeline.Item>
                    <Timeline.Item color="black">
                        Retreiving package
                    </Timeline.Item>
                </Timeline>
            )} else if (orderStatus == 2) {
            return (
                <Timeline>
                    <Timeline.Item color="red">
                        Retreiving package
                    </Timeline.Item>
                </Timeline>
            )} else {
                return (<p>Your order has been canceled or successfully delivered. Please check your order in orderHistory.</p>)
            }
        }
    
    render() {
        return (
            <div>{this.getTimeline()}</div>
        )
    }
}
*/