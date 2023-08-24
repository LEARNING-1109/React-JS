import React, { useState } from "react";

const T_01_useState = () => {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1);
  return (
    <>
      <div>
        Today I am {age} Years of Age
        <div>
          <button onClick={handleClick}>Get older! </button>
        </div>
      </div>
    </>
  );
};

export default T_01_useState;
