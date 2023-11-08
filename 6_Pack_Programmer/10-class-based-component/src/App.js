import React from "react";
import NameComp from './NameComp'

// function App() {
//   return (
//     <div>App</div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props); // parent class ko props send ho jaayega

    this.state = {
      'myName': 'Er. Ayush Kumar',
      'skill': 'Web Developer',
    };

    this.state = { count: 0 };

    // To use this out of this class in any function, we require 👇
    this.incrementFun = this.incrementFun.bind(this)
    this.decrementFun = this.decrementFun.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  incrementFun() {
    console.log('Working +');

    // 🎯⭐ Different ways to update value inside the function
    this.setState({ count: this.state.count + 1 })

    // this.setState((prev) => {
    //   return {count : prev.count+1}
    // })

    // this.setState({
    //   'count': 20
    // })
  }

  decrementFun() {
    this.setState({ count: this.state.count - 1 })

  }

  // ⭐⭐⭐🎯 Different ways to handle change in the input tag
  handleChange(e) {
    this.setState({
      // myName: 'Ayush'  // not working
      myName: e.target.value

    })
  }

  render() {
    return (
      <>
        <div className="bottom-0 absolute">React Class Based Component - App</div>
        <h1  >{this.state.myName}</h1>
        <h3>{this.state.skill}</h3>
        <br />
        <div className="flex justify-center my-3" >
          <button onClick={this.decrementFun} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Decrement
          </button>

          <h1 className="inline w-32 mx-4 text-center font-bold align-middle items-center text-2xl">Count: {this.state.count} </h1>
          <button onClick={this.incrementFun} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Increment
          </button>
        </div>

        <hr />
        {/* Input Tag me value pass -------------------------------- */}
        <div className="mt-5 flex justify-center">
          <input value={this.state.myName} onChange={this.handleChange} type="text" className="w-2/6 px-4 py-2 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Enter text" />

        </div>

        <NameComp name={this.state.myName} />
        <NameComp name={46} />
        {/* <NameComp name={[46]} /> */}

      </>
    )
  }
}

export default App;

