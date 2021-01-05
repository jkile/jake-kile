import React from 'react';
import classnames from "classnames";

export default function ImageIcon(props) {
    return (
        <img
            src={`https://source.unsplash.com/random/${props.size ? props.size + "x" + props.size : "64x64"}`}
            alt=""
            className={classnames(`
             w-${props.size ? props.size / 4 : 16}
            h-${props.size ? props.size / 4 : 16}
            rounded-xl`)} />
    )
}
