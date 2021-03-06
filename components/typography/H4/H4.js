import React from 'react';
import classnames from "classnames";

//<H4 size="7xl" color="gray-800" padding={0}> This is a Test </ H4>

export default function H4(props) {
    return (
        <h4 className={classnames(`
            text-4xl
            text-white
            p-${props.padding ? props.padding : "0"} 
            ${props.className}`)}
        >
            {props.children}
        </h4>
    )
}