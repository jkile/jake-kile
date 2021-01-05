import React from 'react';
import classnames from "classnames";

//<Badge color="tertiary"> Test </Badge>

export default function Badge(props) {
    return (
        <div 
            className={classnames(`
            bg-${props.color ? props.color : "primary"}-300 
            text-${props.color ? props.color : "primary"}-900  
            w-${props.size ? props.size : 14}
            text-sm text-center p-1 rounded-md`)}>
            {props.children}
        </div>
    )
}
