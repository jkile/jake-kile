import React from 'react';
import classnames from "classnames";


// Needs outer container to determine width for flexibility. Likely to be changed (styled differently) substantially
// during each project but created for readability in code.
//<Card padding="4" color="gray-100"> ~contents~ <Card padding="4" color="gray-100">

export default function Card(props) {

    return (
        <div
            className={classnames(`
            bg-transparent
            p-4
            border border-gray-300 shadow-md rounded-xl`)}
        >
            {props.children}
        </div>
    )
}
