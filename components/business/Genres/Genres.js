import React from 'react';
import Container from '../../layout/Container/Container';
import GenreCard from "../GenreCard/GenreCard";

export default function Genres() {

    const genreData = [
        {
            imageSrc: "",
            header: "Coding + Algorithms",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quo!",
            buttonColor: "primary"
        },
        {
            imageSrc: "",
            header: "Audio Engineering",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quo!",
            buttonColor: "secondary"
        },
        {
            imageSrc: "",
            header: "Sounds + Music",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quo!",
            buttonColor: "tertiary"
        }
    ]

    return (
        <div className="py-4 mx-auto max-w-sm sm:max-w-lg md:max-w-lg lg:max-w-2xl xl:max-w-5xl">
            <div className="flex flex-col items-start space-y-4 xl:items-center xl:space-y-0 xl:space-x-4 xl:flex-row xl:justify-center">
                {genreData.map(item => {
                    return <GenreCard
                        imageSrc={item.imageSrc}
                        header={item.header}
                        text={item.text}
                        buttonColor={item.buttonColor}
                    />
                }
                )}
            </div>
        </div>
    )
}
