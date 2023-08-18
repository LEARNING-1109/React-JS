// 1. Action Creator
// Person who is submitting the Form

const newBooking = (name, amount) => {
  return {
    // 🟢 A better naming convention for the type is in REDUX is to give everything in the upper case separated by underscore (_)
    type: "",

    payload: {
      // 🟢  name: name,    // Here we are using ES6 so the if the key and the value of the object are same then we can eliminate writing multiple time
      name,
      amount,
    },
  };
};

const cancelBooking = (name, refundAmount) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refundAmount,
    },
  };
};

// 2. Reducers
const reservationHistory = (oldReservationList = [], action) => {
  if (action.type === "NEW_BOOKING") {
    // return oldReservationList.push(action.payload); // 🔴 This is not a correct way of updating the state

    // 🟢 use ... rest operator
    return [...oldReservationList, action.payload];
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter((record) => {
      return record !== action.payload.name;
    });
  }

  return oldReservationList;
};

const cancellationHistory = (oldCanellationList = [], action) => {
  if (action.type === "CANCEL_BOOKING") {
    return [...oldCanellationList, action.payload];
  }

  return oldCanellationList;
};

const accounting = (totalMoney = 100, action) => {
  if(action.type == "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  }
  else if(action.type === "CANCEL_BOOKING" )
  {
    return totalMoney - action.payload.refundAmount;
  }
  return totalMoney;
}

// 3. Redux Store

// console.log(Redux)

console.log("hello");
