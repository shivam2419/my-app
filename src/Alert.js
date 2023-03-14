import React,{useState} from 'react'


export default function Alert(props) {
    return(
        props.txt && <div className={`alert alert-${props.txt.type} alert-dismissible fade show`} role="alert">
            <strong>{props.txt.type}</strong>: {props.txt.msg} 
        </div>
    )
}

