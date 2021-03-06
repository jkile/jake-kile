import React from 'react';
import classnames from "classnames";

//<H2 size="7xl" color="gray-800" padding={0}> This is a Test </ H2>

export default function H2(props) {
    return (
        <h2 className={classnames(`
            text-6xl
            text-white
            p-${props.padding ? props.padding : "0"} 
            ${props.className}`)}
        >
            {props.children}
        </h2>
    )
}