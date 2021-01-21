import React from 'react';
import classnames from "classnames";

//<H1 size="7xl" color="gray-800" padding={0}> This is a Test </ H1>

export default function H1(props) {
    return (
        <h1 className={classnames(`
            text-7xl
            text-white
            p-${props.padding ? props.padding : "0"} 
            ${props.className}`)}
        >
            {props.children}
        </h1>
    )
}
