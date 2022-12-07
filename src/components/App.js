import React, { Component } from 'react';
import Cart from './Cart';
import CartItems from './CartItems';
import FilterCart from './FilterCart';
import ProductList from './ProductList';

export class App extends Component {
  state = {
    cartItems: [],
    filter: null,
  };

  onFilterChange = (filter) => {
    this.setState({
      filter: filter,
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
      <div className="container">
        <div>
          <CartItems cart={this.state.cartItems} />
        </div>

        <div className="d-flex">
          <FilterCart
            cart={Cart}
            onFilterChange={this.onFilterChange}
            filter={this.state.filter}
          />
          <ProductList
            cart={Cart}
            getCartItems={this.getCartItems}
            cartItems={this.state.cartItems}
            filter={this.state.filter}
          />
        </div>
      </div>
    );
  }
}

export default App;
