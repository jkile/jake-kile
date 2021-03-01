import React, { useState, useEffect } from 'react';
import styles from "./Button.module.css"

export default function Button(props) {

    const [variant, setVariant] = useState("")
    const [size, setSize] = useState("")

    useEffect(() => {
        switch(props.variant) {
            case "primary":
                setVariant(styles.btnPrimary);
                break;
            case "secondary":
                setVariant(styles.btnSecondary);
                break;
            case "tertiary":
                setVariant(styles.btnTertiary);
                break;
            case "gradient":
                setVariant(styles.btnGradient);
                break;
            default:
                setVariant(styles.btnPrimary)
        }

        switch(props.size) {
            case "small":
                setSize(styles.btnSmall);
                break;
            case "large":
                setSize(styles.btnLarge);
                break;
            case "full":
                setSize(styles.btnFull);
                break;
            default:
                setSize(styles.btnSmall)
        }

    }, [])

    return (
        <button 
            type={props.type} 
            onClick={props.onClick} 
            className={`${props.className} ${variant} ${styles.btn} ${size}`}
        >
                {props.children}
        </button>
    )
}
