import React, { Component } from 'react';

export class CartItems extends Component {
  render() {
    return (
      <div className="cart-items">CartItems :- {this.props.cart.length} </div>
    );
  }
}

export default CartItems;
