import React from "react";

import Product from './Product.js';

// type rfc for React Functional Component

// export default function ProductList(y) {
  export default function ProductList(props) {  
    return props.productList.length > 0 ? (
      props.productList.map((product, i) => {

        // console.log(props);

        return (
          <Product
          
          product = {product}
          key = {i}
          incrementQuantity = {props.incrementQuantity}
          index = {i}
          decrementQuantity= {props.decrementQuantity}
          removeItem = {props.removeItem}
          
          />

        );
      } )

    ) : (

      <h1>No Products Exists in the Carts</h1>

    );
  

}


