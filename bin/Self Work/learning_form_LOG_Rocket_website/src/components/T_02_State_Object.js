import React, { useState } from "react";

const T_02_State_Object = () => {
//   const [state, setState] = useState({ age: 19, rollNo: 4 });

  const [age, setAge] = useState(10);
  const [rollNo, setRollNo] = useState(49);



  // HANDLE CHANGES ⚙⚙⚙
  const handleAge = () => {
    const updatedAge = age+2;
    setAge(updatedAge);
    console.log(updatedAge);
  };

  const handleRollNo = () => {
      const updateRoll = rollNo + 1;
      setRollNo(updateRoll);
      console.log(updateRoll);
  };

  return (
    <>
      <h1>Learn State Objects</h1>

      <p>Today My age is : {age}</p>
      <p>Roll No : {rollNo}</p>

      <div>
        &nbsp;
        <button onClick={handleAge}>Get Older</button> &nbsp;
        <button onClick={handleRollNo}>Increment Roll No</button>
      </div>
    </>
  );
};

export default T_02_State_Object;
