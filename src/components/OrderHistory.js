import React from 'react';
import { Spin, List, Avatar } from 'antd';
import { TOKEN_KEY, API_ROOT, AUTH_HEADER } from '../constants.js';

export class OrderHistory extends React.Component {
    state = {
        error: '',
        isLoadingOrders: true,
        orders: [],
    }
    
    componentDidMount() {
        this.loadOrderHistory();
    }

    loadOrderHistory = () => {
        const token = localStorage.getItem(TOKEN_KEY);
        // Fire API call
        fetch(`${API_ROOT}/orderhistory`, {
            method: "GET",
            headers: {
                Authorization: `${AUTH_HEADER} ${token}`
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Fail to load posts.");
            })
            .then((data) => {
                this.setState({
                    isLoadingOrders: false,
                    orders: data ? data : [],
                })
                console.log(this.state.orders);
            })
            .catch((e) => {
                this.setState({
                    isLoadingOrders: false,
                    error: e.message,
                })
            })
    }


    getHistoryOrders = () => {
        const { error, orders, isLoadingOrders } = this.state;

        if (error) {
            return error;
        } else if (isLoadingOrders) {
            return <Spin tip="Loading history order ... " />;
        } else if (orders && orders.length > 0) {
            return (
                <div className="track" >
                <List className="list"
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}
                    dataSource={orders}
                    renderItem={item => (
                        <List.Item className = "OrderHistory"
                            key={item.order_id}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={require("../assets/images/imagebox.png")} alt="imagebox" />}
                                title={<div>Order ID:  {item.order_id}</div>}
                                description={
                                    
                                    <div>
                                            <b>Order was created at </b> {item.create_time}<br /> 
                                            <b>Order was delivered at </b> {item.a_arrival}<br /> 
                                            <b>Ship from: </b>{item.sender} <br />
                                            <b className="spacer1"></b>{item.origin} <br />
                                            <b>Ship &nbsp; &nbsp; &nbsp;to: </b>{item.receiver} <br /> 
                                            <b className="spacer2"></b>{item.destination} <br />
                                            <b>Total cost was </b> {item.cost}
                                    </div> 
                                }
                            />
                            
                        </List.Item>
                    )}  /> 
                    </div>
                )
        } else {
            return "No History Orders.";
        }
    }

    render() {
        return (
            <div>
                {this.getHistoryOrders()}
            </div>
        )
    }
}