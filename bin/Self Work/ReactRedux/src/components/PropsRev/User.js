import React, { Component } from "react";

function User(props) {
  console.log(props);
  console.log(props.data);
  console.log(props.data.name);
  return (
    <>
      <h1>User Component</h1> 
      <p>{props.data.name}</p>
      <p>{props.data.age}</p>
    </>
  );
}

export default User;
