import React from 'react';
import Container from "../../layout/Container/Container";
import H1 from "../../typography/H1/H1";
import H2 from "../../typography/H2/H2";
import H3 from "../../typography/H3/H3";
import ImageIcon from '../../ui/ImageIcon/ImageIcon';

export default function Hero() {
    return (
        <Container className="pt-16 lg:pt-32">
            <div className="flex flex-col-reverse lg:flex-row lg:space-x-2 lg:justify-between">
                <div>
                    <H1 className="font-bold">Hello,</H1>
                    <H2 className="font-bold pb-6">my name is Jake,
                        <br />
                        and I am a:
                        <span className="text-gradient-400 flex flex-col font-mono">
                            <span>software engineer,</span>
                            <span>web developer,</span>
                            <span>audio engineer,</span>
                            <span>artist,</span>
                            <span>musician,</span>
                            <span>and tinkerer.</span>
                            <br />
                        </span>
                    </H2>
                </div>
                <div className="pb-8">
                    <ImageIcon size={256} src="/assets/headshot.jpg" className="object-cover xl:w-80 xl:h-80" />
                </div>
            </div>
        </Container>
    )
}
