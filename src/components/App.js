import React, { Component } from 'react';
import Cart from './Cart';
import CartItems from './CartItems';
import FilterCart from './FilterCart';
import ProductList from './ProductList';

export class App extends Component {
  state = {
    cartItems: [],
    checked: [],
  };

  getChecked = (e) => {
    this.setState({
      checked: [...this.state.checked, e],
    });
  };
  removeChecked = (e) => {
    console.log(e);
    this.setState({
      checked: this.state.checked.filter((data) => data !== e),
    });
  };

  getCartItems = (id, mode) => {
    this.setState({
      cartItems:
        mode === 'Add'
          ? [...this.state.cartItems, id]
          : this.state.cartItems.filter((d) => (d === id ? '' : id)),
    });
  };

  render() {
    return (
      <div className='container'>
        <div>
          <CartItems cart={this.state.cartItems} />
        </div>

        <div className='d-flex'>
          <FilterCart
            cart={Cart}
            getChecked={this.getChecked}
            removeChecked={this.removeChecked}
            checked={this.state.checked}
          />
          <ProductList
            cart={Cart}
            getCartItems={this.getCartItems}
            cartItems={this.state.cartItems}
            checked={this.state.checked}
          />
        </div>
      </div>
    );
  }
}

export default App;
