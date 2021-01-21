import React from 'react';
import classnames from "classnames";

//<H6 size="7xl" color="gray-800" padding={0}> This is a Test </ H6>

export default function H6(props) {
    return (
        <h6 className={classnames(`
            text-2xl
            text-white
            p-${props.padding ? props.padding : "0"} 
            ${props.className}`)}
        >
            {props.children}
        </h6>
    )
}