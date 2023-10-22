/*
React Component Lifecycle:

1. componentDidMount
2. shouldComponentUpdate
3. componentDidUpdate
4. componentWillUnmount
*/

import React from 'react';
import NameComp from './NameComp';
import Unmount from './Unmount';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    console.log('1. constructor');

    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    })    

    // Agar should shouldComponentUpdate() me return false hai, then UI me value update nhi hogi, but console me value change hota rahega.
    console.log("Count Value : ", this.state.count)
  }

  componentDidMount() {
    console.log('4.1 component mounted Successfully');
    setTimeout(() => {
      console.log('API Fetched (using setTimeout)');
    }, 2000)
  }

  componentDidUpdate() {
    console.log('4.2 component DID UPDATE -> YES');
    setTimeout(() => {
      console.log('4.2 component DID UPDATE - API Fetched (using setTimeout)');
    }, 2000)
  }

  shouldComponentUpdate() {
    let bool = false;
    console.log('shouldComponentUpdate : ', bool);
    return bool;
  }

  componentWillUnmount() {
    console.log("Unmounting");
  }

  render() {
    console.log('2. In b/w render() - return() Method');
    return (
      <>
        {console.log('3. Inside the return method')}
        React Life Cycle         
        <span className='my-custom block my-4' >count: {this.state.count} </span>        
        <button onClick={this.increment} className="my-4 mx-4 bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded">
          Increment
        </button>
                
        <NameComp />
        
   
      </>
    )
  }

}



export default App;
