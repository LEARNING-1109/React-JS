import React, { useState, useReducer } from "react"; // 🔑

const initialState = [  // 🔑 Step 1
  {
    id: Date.now(),
    name: "Ayush Kumar",
    email: "a@gmail.com",
  },
];

function reducer(state, action) {   // 🔑 Step 4
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });

    default:
      throw new error();
  }
}

export default function AddDeleteListOfForm() {
  const [state, dispatch] = useReducer(reducer, initialState);  // 🔑 Step 2

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(state);

  const addContact = (e) => {
    e.preventDefault();

    const contact = {
      id: Date.now(),
      name,
      email,
    };

    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact }); // 🔑 Step 3
  };

  return (
    <>
      <h1>Use Reducer Hooks</h1>
      {/* 👇 🔑 */} 
      <form action="" onSubmit={addContact}> 
        <input
          type="text"
          placeholder="name"
          value={name}  // 🔑
          onChange={(e) => setName(e.target.value)} // 🔑
        />
            &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <button>Add Contact</button>
        </div>
      </form>

      <div>
        <ul>
          {state.map((contact) => { // 🔑
            return (
              <>
                <li key={contact.id}>
                  <h4>{contact.name}</h4>
                  <div>
                    <span>{contact.email}</span> &nbsp;&nbsp;&nbsp;
                    <button
                      onClick={() =>        // 🔑
                        dispatch({
                          type: "delete",
                          payload: { id: contact.id },
                        })
                      }
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
