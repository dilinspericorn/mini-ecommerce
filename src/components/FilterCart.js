import React, { Component } from 'react';

export class FilterCart extends Component {
  addSize = (size) => {
    this.props.getChecked(size);
  };
  removesize = (size) => {
    this.props.removeChecked(size)
    // this.props.checked.filter((d)=>d==)
  };

  render() {
    let filter = this.props.cart.map((data) => data.size);
    filter = new Set(filter);
    filter = Array.from(filter);
    const filterProduct = filter.map((data, index) => {
      return (
        <div key={index}>
          <input
            type="checkbox"
            onClick={(e) => {
              e.target.checked === true
                ? this.addSize(data)
                : this.removesize(data);
            }}
          />
          {data}
        </div>
      );
    });
    return (
      <div className='filter-cart'>
        <h5>Filter</h5>
        <div>{filterProduct}</div>
      </div>
    );
  }
}

export default FilterCart;
