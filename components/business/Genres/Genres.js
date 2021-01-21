import React from 'react';
import Container from '../../layout/Container/Container';
import GenreCard from "../GenreCard/GenreCard";
import Link from "next/link";

export default function Genres() {

    const genreData = [
        {
            imageSrc: "",
            header: "Coding + Algorithms",
            text: "Take a look at my GitHub and see some of the projects I've worked on! Soon I will add a more in depth section but my starred repos will suffice for now!",
            buttonColor: "primary",
            link: <a href="https://www.github.com/jkile">See More</a>

        },
        {
            imageSrc: "",
            header: "Photos + Designs",
            text: "Here is a general repo of photos I've taken and sites I've designed. It is not beautifully organized quite yet, but will be in time. For now it serves as a nice mood board.",
            buttonColor: "secondary",
            link: <Link href="/mood">See More</Link>
        },
        {
            imageSrc: "",
            header: "Sounds + Music",
            text: "Listen to some of the tunes I've made over the years on Bandcamp! There's lots to explore in there and soon there will be more in the way of collaborations!",
            buttonColor: "tertiary",
            link: <a href="https://groveparkway.bandcamp.com/">See More</a>
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
                    >
                        {item.link}
                    </GenreCard>
                }
                )}
            </div>
        </div>
    )
}
