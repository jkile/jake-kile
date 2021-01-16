import React from 'react';
import classnames from "classnames";

export default function Container(props) {
    return (
        <div className={classnames(`${props.className} mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl`)}>
            {props.children}
        </div>
    )
}
