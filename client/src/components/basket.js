import React, { Component } from 'react';
import util from '../util'
import styled from "styled-components";
import {withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const BasketWrapper = styled('div')`
        margin-top:10px;
        background: rgba(60, 60, 60,0.6);
    `;
class Basket extends Component {
   
    constructor(props) {
        super(props)
       this.state={
        token:null
    }
    }

    static propTypes = {
        token: PropTypes.shape({})
    }

    static defaultProps = {
        token: localStorage.usertoken,
    }

    componentDidUpdate(prevProps) {
        if(this.props.token !== prevProps.token) {
            this.setState({ token:localStorage.usertoken })
        }
    }
    

    render() {
        const { cartItems } = this.props;
         const token = localStorage.usertoken;

        return (
            <BasketWrapper className="alert alert-info">
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>{ token ?
                      <button className="btn btn-primary" onClick={() => alert("Your order has been placed")}> Cart</button>
                        :
                      <button className="btn btn-primary" onClick={() => { this.props.history.push('/login') }}> Cart</button>
                        }
                    </div>
                }
            </BasketWrapper>
        )
    }
}

export default withRouter(Basket);