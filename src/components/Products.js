import React, { Component } from "react";
import Product from "./Product";


class Products extends Component {
  render (){
    return this.props.products.map(product => 
      <Product product = {product} key = {product.id} />
 );
  }
}

export default Products