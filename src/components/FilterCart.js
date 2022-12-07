import React, { Component } from 'react';
import { onlyUnique } from './Utils';
export class FilterCart extends Component {
  render() {
    let filter = this.props.cart.map((data) => data.size).filter(onlyUnique);
    filter = filter.map((data, index) => {
      return (
        <div key={index}>
          <input type="checkbox" 
          onChange={(e)=>this.props.onFilterChange(e.target.checked===true?data:null)}
          checked={this.props.filter === data}
          />
          {data}
        </div>
      );
    });
    return (
      <div className="filter-cart">
        <h5>Filter</h5>
        <div>{filter}</div>
      </div>
    );
  }
}

export default FilterCart;
