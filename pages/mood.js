import React from 'react'
import MoodBoard from '../components/business/MoodBoard/MoodBoard'

export default function mood() {
    return (
        <body className="bg-black">
            <MoodBoard />
        </body>
    )
}

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
  