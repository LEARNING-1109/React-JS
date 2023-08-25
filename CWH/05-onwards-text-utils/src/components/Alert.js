import React from 'react'

export default function Alert(props) {
    console.log(props.alert);
    return (
        props.alert && <div id='myAlert' className={`position-absolute alert alert-${props.alert.type} alert-dismissible fade show mb-0`} role="alert" >
            <strong>{`${props.alert.msg}`}</strong>             
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
