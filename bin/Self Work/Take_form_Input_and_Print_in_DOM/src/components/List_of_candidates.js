import React, { useState } from "react";
import InputForm from "./Input_form";

import "./List_of_candidates.css";

// Print an array in a React JS
const arr = ["Ayush", "Rohit", "Shaan", "Jayesh"];

// creating arrow of objects
const List_of_candidates = () => {
  
  
  const list = [
    {
      // id: 1,
      name: "Ayush",
      exp: "PHP, React JS",
    },
    {
      id: 2,
      name: "Rohit",
      exp: "Djano",
    },
  ];
  
  const [allList, setList] = useState(list);
  
  
  const saveExpenseDataHandler = (collectedData) => {
    console.log(collectedData);

    const updateData = [collectedData, ...allList]

    setList(updateData);

    // console.log( allList.map( (y, pos) => {
      // {y.Name};
    // } )  );

    console.log(allList);
    
  };
  
  
  // now using useState to update the list of the candidates
  
 
  return (
    <>
      <InputForm onSaveExpenseDataHandler={saveExpenseDataHandler} />

      <div>
        <h3 className="my-3">List of Candidates : </h3>
        <div className="box">
          {/* {arr} */}
          {/* {arr.map( (name2, pos ) => <h2 key={pos}> {name2}</h2>)} */}

          {/* {list.map((y) => (
          <h3>
          {y.Name} : {y.exp}
          </h3>
        ))} */}

          {
          // list.map((item, pos) => {
          allList.map((item, pos) => 
             (
              <div className="fs-5" key={pos}>
                <div>Name : {item.name}</div>        
              <div>Skills : {item.exp}</div>
              </div>
            )
          
          )
          }
        </div>
      </div>
    </>
  );
};

export default List_of_candidates;
