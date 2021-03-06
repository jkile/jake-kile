import React from 'react';
import Link from "next/link";
import Container from "../../layout/Container/Container";
import H1 from '../../typography/H1/H1';
import H2 from '../../typography/H2/H2';
import H3 from '../../typography/H3/H3';
import H6 from '../../typography/H6/H6';

export default function MoodBoard() {

    const images = [
        "burn.jpeg",
        "grass.jpeg",
        "kitten.jpeg",
        "modular.jpeg",
        "plant.jpeg",
        "shopping.jpeg",
        "spencer.jpeg",
        "water.jpeg"
    ]

    return (
        <div>
            <Container className="pt-16 lg:pt-32">
                <div className="pb-12">
                    <H6 className="font-mono hover:text-gray-400"><Link href="/">Return Home</Link></H6>
                </div>
                <H1 className="font-bold">Design Work</H1>
                <div className="flex flex-col mb-12 lg:flex-row lg:space-x-8">
                    <div className="pt-6 max-w-lg">
                        <img className="rounded-xl" src="/assets/sunlink_design_demo.jpg" alt="Sunlink Design Concept"/>
                        <H6 className="font-semibold font-mono pt-4">Sunlink Energy Design Concept (Feat some Tailwind UI)</H6>
                    </div>
                    <div className="pt-6 max-w-lg">
                        <img className="rounded-xl" src="/assets/anm_design.jpg" alt="ANM Dog Rescue Design"/>
                        <H6 className="font-semibold font-mono pt-4">ANM Dog Rescue Design</H6>
                    </div>
                    <div className="pt-6 max-w-lg">
                        <img className="rounded-xl" src="/assets/saguaro_recovery_design.jpg" alt="Saguaro Recovery Design"/>
                        <H6 className="font-semibold font-mono pt-4">Saguary Recovery Design</H6>
                    </div>
                </div>
                <H2 className="font-bold">Photos</H2>
                <div className="flex flex-col space-y-4 py-12">
                    {images.map(item => {
                       return <img src={`/assets/${item}`} alt={item} className="rounded-lg"/>
                    })}
                </div>
            </Container>
        </div>
    )
}
