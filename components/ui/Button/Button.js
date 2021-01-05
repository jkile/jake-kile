import React from 'react';
import classnames from "classnames";

// <Button color="primary" size={6} textSize={"md"} onClick={() => console.log("test")} >Test</Button>

export default function Button(props) {
    if (props.variant && props.variant === "outline") {
        return (
            <button
                type="button"
                onClick={props.onClick}
                className={classnames(`
                px-${props.size ? props.size : 6} 
                py-${props.size ? props.size <= 10 ? 2 : 4 : 2} 
                text-${props.textSize ? props.textSize : "md"} 
                text-${props.color ? props.color : "primary"}-500
                border-${props.color ? props.color : "primary"}-500
                hover:text-${props.color ? props.color : "primary"}-600 
                hover:border-${props.color ? props.color : "primary"}-600 
                focus:bg-${props.color}-700
                focus:ring-primary-500
                focus:ring-2
                rounded-md bg-transparent font-bold border-2 transition duration-150`)}
            >
                {props.children}
            </button>
        )
    } else {
        return (
            <button
                type="button"
                onClick={props.onClick}
                className={classnames(`
                bg-${props.color ? props.color : "primary"}-500
                px-${props.size ? props.size : 6} 
                py-${props.size ? props.size <= 10 ? 2 : 4 : 2} 
                text-${props.textSize ? props.textSize : "md"} 
                hover:bg-${props.color ? props.color : "primary"}-600 
                focus:bg-${props.color}-700
                focus:ring-primary-500
                focus:ring-2
                rounded-md font-bold text-white border-2 border-transparent transition duration-150`)}
            >
                {props.children}
            </button>
        )
    }
}
