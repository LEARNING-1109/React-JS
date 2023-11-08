import React, { useEffect } from 'react'

// ------- 🎯 Home Element using Functional component ---------------------
// const HomeUsingFunctionalComponent = () => {
//   const mouseHoverFunc = (e) => {
//     // console.log(e.clientX, " ", e.clientY);    
//     console.log(e.clientX);    
//     console.log(e.clientY);    
//   }

//   useEffect(() => {
//     document.addEventListener('mousemove', mouseHoverFunc)

//     return () => {
//       document.removeEventListener('mousemove', mouseHoverFunc)      
//     }
//   }, [])


//   return (
//     <div>Welcome to Home Page</div>
//   )
// }
// export default HomeUsingFunctionalComponent
// ------- 🎯 Home Element using Functional component ---------------------

// ------- 🟢 Home Element using Class Based component ---------------------
const moveOverFunc = (e) => {
  console.log(e.clientX)
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener("mousemove", moveOverFunc);
  }
  
  componentDidUpdate() {
    document.addEventListener("mousemove", moveOverFunc);
    return true;
  }
  
  shouldComponentUpdate() {
    return true
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", moveOverFunc);    
  }


  render() {
    return (
      <div>Home Using Class Based Component</div>
    )
  }
}


  // ------- 🟢 Home Element using Class Based component ---------------------