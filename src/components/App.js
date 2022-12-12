import React, { Component } from 'react';
import Cart from './Cart';
import CartItems from './CartItems';
import FilterCart from './FilterCart';
import ProductList from './ProductList';

export class App extends Component {
  constructor() {
    super();
    localStorage.setItem('cart', JSON.stringify(Cart));
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')),
      cartItems: [],
      filter: [],
    };
  }

  // state = {

  // };

  onFilterChange = (filter) => {
    console.log('add', filter);
    this.setState({
      filter: [...this.state.filter, filter],
    });
  };

  removeFilter = (filter) => {
    console.log('remove', filter);
    this.setState({
      filter: this.state.filter.filter((data) => data !== filter),
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
    console.log(this.state.filter);
    return (
      <div className="container">
        <div>
          <CartItems cart={this.state.cartItems} />
        </div>

        <div className="d-flex">
          <FilterCart
            cart={Cart}
            onFilterChange={this.onFilterChange}
            removeFilter={this.removeFilter}
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
