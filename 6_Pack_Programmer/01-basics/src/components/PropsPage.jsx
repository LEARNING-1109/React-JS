import React from 'react'

// destructuring the props in the parameter
const PropsPage = ({head, content, footer, price=549 }) => {
  return (
    <>
          <h1>Heading:  {head} </h1>
          <h3>Content of Page: {content}  </h3>
          <h4>Buy Now for Price: { price }</h4>
          <p>Footer: {footer}  </p>
    </>
  )
}
// const PropsPage = (props) => {
//   return (
//     <>
//           <h1>Heading:  {props.head} </h1>
//           <h3>Content of Page: {props.content}  </h3>
//           <p>Footer: {props.footer}  </p>
//     </>
//   )
// }

export default PropsPage;