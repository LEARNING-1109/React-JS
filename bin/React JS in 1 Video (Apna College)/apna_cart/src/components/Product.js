import React from "react";

export default function Product(props) {

    function incrementQuantity(index) {
        
    }

  return (
    <>
      <div className="row mt-3">
        <div className="col-4">
          <h4>
            {props.product.name}
            <span className="badge bg-secondary mx-3">₹ {props.product.price}</span>
          </h4>
        </div>

        <div className="col-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed style example"
          >
            <button
              className="btn btn-danger"
              onClick={() => {
                props.decrementQuantity(props.index);
              }}
            >
              -
            </button>

            <button className="btn btn-warning" type="button">
              {props.product.quantity}
            </button>

            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                props.incrementQuantity(props.index);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="col-2">          
          {props.product.quantity * props.product.price}
        </div>

        <button
          className="col-1 btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
}
