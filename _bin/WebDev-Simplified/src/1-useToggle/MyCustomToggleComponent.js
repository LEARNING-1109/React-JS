import React, {useState} from "react";

export default function MyCustomToggleComponent () {
  const [value, toggleValue] = useState(false);

  const handleToggle = () => {
    //   toggleValue(true);

      (value == false) ? toggleValue(true) : toggleValue(false);
  }  

  return (
      <div>
        {value.toString()}
        <br />
        <button type="button" onClick={handleToggle} >Toggle</button>
    </div>
  )
};
