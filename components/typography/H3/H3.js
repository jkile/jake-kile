import React from 'react';
import classnames from "classnames";

//<H3 size="7xl" color="gray-800" padding={0}> This is a Test </ H3>

export default function H3(props) {
    return (
        <h3 className={classnames(`
            text-5xl 
            text-white
            p-${props.padding ? props.padding : "0"} 
            ${props.className}`)}
        >
            {props.children}
        </h3>
    )
}