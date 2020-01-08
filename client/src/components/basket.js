import React, { Component } from 'react';
import util from '../util'
import styled from "styled-components";


const BasketWrapper = styled('div')`
        margin-top:10px;
        background: rgba(60, 60, 60,0.6);
    `;
class Basket extends Component {
    render() {
        const { cartItems } = this.props;

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
                        </b>
                        <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary">checkout</button>
                    </div>
                }
            </BasketWrapper>
        )
    }
}

export default Basket