import React, {useState} from "react";

import './Input_form.css'
import List_of_candidates from "./List_of_candidates";

const InputForm = (props) => {

  const [newName, setNewName] = useState("");
  const [newExperience, setnewExperience] = useState("");
  
  const nameHandler = (event) => {
    setNewName(event.target.value);
  }
  
  const experienceHandler = (event) => {
    setnewExperience(event.target.value);
  }
  
  const submitHandler = (event) => {
    event.preventDefault();  // prevent the page from reloading on clicking submit

    const collectedData = {
      name : newName,
      exp : newExperience,
      
    }
    
    // This function is coming from the List of Candidates to accept the collected
    props.onSaveExpenseDataHandler(collectedData);
    console.log(collectedData);

    setNewName('');
    setnewExperience('');

  };


  return (
  <>

    <div  id="main-container" >
      <form className="container-fluid p-5" style={{ width: "30rem", backgroundColour: "grey" }} onSubmit={submitHandler} >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={newName} onChange={nameHandler} />
          <div id="emailHelp" className="form-text">
            We'll never share your detail with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Expertise</label>
          <input type="text" className="form-control" value={newExperience} onChange={experienceHandler} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>

    

    </>
  );
};

export default InputForm;
