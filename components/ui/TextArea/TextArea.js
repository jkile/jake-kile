import React from 'react'

export default function TextArea(props) {
    return (
        <textarea type="textarea" placeholder={props.placeholder} className={`rounded-md bg-transparent text-white border-gray-500 border-2 focus:ring-2 focus:ring-primary-300`}/>
    )
}
