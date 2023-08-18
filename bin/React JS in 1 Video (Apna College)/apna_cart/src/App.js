import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

// 👇 Using the State Hooks :
import React, { useState } from "react";
import ProductList from "./components/ProductList.js";

import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];


  // Declare a new state variable, which we'll call "productList"
  let [productList, setProductList] = useState(products);

  // Initially make total amount as 0
  let [totalAmount, setTotalAmount] = useState(0);


  // use arrow function here 👇
  const incrementQuantity = (index) => {

    // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
    let newProductList = [...productList];
    newProductList[index].quantity++;   // increment the quantity of the product list
    setProductList(newProductList);   // Updating the product list 

    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;

    
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];

    // add new item with all its details
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>


      {/* Passing total Amount & reset function to the footer 👇 */}
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;