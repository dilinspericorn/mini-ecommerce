import React, { Component } from 'react';

export class ProductList extends Component {
  render() {
    // let products = this.props.cart;
    // if (this.props.checked.length > 0) {
    //   products = products.filter((data) =>
    //     this.props.checked.includes(data.size)
    //   );
    // }
    const productList = products.map((data, index) => {
      return (
        <div key={index}>
          <div className="card" style={{ width: '15rem' }}>
            <img
              className="card-img-top image-size"
              src={data.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>

              <button
                href="#"
                className={
                  this.props.cartItems.includes(data.id)
                    ? 'btn btn-danger'
                    : 'btn btn-primary'
                }
                onClick={() =>
                  this.props.getCartItems(
                    data.id,
                    this.props.cartItems.includes(data.id) ? 'Remove' : 'Add'
                  )
                }
              >
                {this.props.cartItems.includes(data.id)
                  ? 'Remove From Cart'
                  : 'Add To Cart'}
              </button>
            </div>
          </div>
        </div>
      );
    });
    return <div className="product-list d-flex">{productList}</div>;
  }
}

export default ProductList;
