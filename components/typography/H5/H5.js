import React from 'react';
import classnames from "classnames";

//<H5 size="7xl" color="gray-800" padding={0}> This is a Test </ H5>

export default function H5(props) {
    return (
        <h5 className={classnames(`
            text-3xl
            text-white
            p-${props.padding ? props.padding : "0"} 
            ${props.className}`)}
        >
            {props.children}
        </h5>
    )
}