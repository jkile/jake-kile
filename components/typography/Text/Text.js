import React from 'react';
import classnames from "classnames";

//<Text size="md" color="gray-800" padding={0}> This is a Test </ Text>

export default function Text(props) {
    return (
        <p className={classnames(`
            text-${props.size} 
            p-${props.padding ? props.padding : "0"} 
            text-${props.color ? props.color : "gray-600"}
            ${props.className} font-mono`)}
        >
            {props.children}
        </p>
    )
}
