import React from 'react';
import Image from "next/image";
import classnames from "classnames";

export default function ImageIcon(props) {
    return (
        <Image width={props.size || 64} height={props.size || 64}
            src={props.src ? props.src : `https://source.unsplash.com/random/${props.size ? props.size + "x" + props.size : "64x64"}`}
            alt=""
            className={classnames(`
            ${props.className} flex-none
             w-${props.size ? props.size / 4 : 16}
            h-${props.size ? props.size / 4 : 16}
            rounded-2xl`)} />
    )
}
