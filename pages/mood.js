import React from 'react'
import MoodBoard from '../components/business/MoodBoard/MoodBoard';
import Meta from "../partials/seo-meta";

export default function mood() {
    return (
        <>
            <Meta
                title="Mood / Design | Jake Kile, Developer, Artist, Musician"
                desc="The home of Jake Kile, developer extraordinaire"
                canonical="https://www.jakekile.com/"
            />
            <body className="bg-black">
                <MoodBoard />
            </body>
        </>
    )
}

