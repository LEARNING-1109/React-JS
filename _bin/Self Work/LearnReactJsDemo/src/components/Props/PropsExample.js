import React from 'react'

export default function PropsExample (  {firstName, lastName, email}    ) {


    return (
        <>
            <div>
                {/* <h1>First Name : Ayush</h1>
                <h1>Last Name : Kumar</h1>
                <h1>Email : ay@gmail.com</h1> */}


                <h1>First Name : {firstName}</h1>
                <h1>Last Name : {lastName}</h1>
                <h1>Email : {email}</h1>
                <hr />
            </div>
        </>
    )
}