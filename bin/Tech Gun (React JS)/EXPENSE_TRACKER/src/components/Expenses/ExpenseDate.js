import "./ExpenseDate.css";

// function ExpenseDate(props) {
const ExpenseDate = (props) => {
  /* <div>17 February, 2022</div>
      <div>{props.date}</div>
      <div>{props.date.toISOString()}</div> */

  // Now correcting the Date Error using below codes ✅✅
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day} &nbsp; </div>
      <div className="expense-date__month">{month} &nbsp; </div>
      {/* <div className="expense-date__year">{year} &nbsp; </div> */}
    </div>
  );
}

// It will export the ExpenseDate function which is created above.
export default ExpenseDate;
