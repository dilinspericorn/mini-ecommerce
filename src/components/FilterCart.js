import React, { Component } from 'react';
import { onlyUnique } from './Utils';
export class FilterCart extends Component {
  onFilterChange = (data) => {
    this.props.onFilterChange(data);
  };
  removeFilter = (data) => {
    this.props.removeFilter(data);
  };
  render() {
    let filter = this.props.cart.map((data) => data.size).filter(onlyUnique);
    filter = filter.map((data, index) => {
      // console.log(filter);
      return (
        <div key={index}>
          <input
            type="checkbox"
            onChange={(e) => {
              e.target.checked === true
                ? this.onFilterChange(data)
                : this.removeFilter(data);
            }}
            // checked={console.log(this.props.filter.includes(data)) }
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
