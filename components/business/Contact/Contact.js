import React from 'react'
import Container from '../../layout/Container/Container'
import H2 from '../../typography/H2/H2'
import H6 from '../../typography/H6/H6'
import Text from '../../typography/Text/Text'

export default function Contact() {
    return (
        <Container className="py-24">
            <H2 className="font-bold mb-4">Contact Me</H2>
            <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8 lg:justify-between">
                <Text color="gray-400" className="max-w-md">Want to discuss working together? Maybe want to talk about art or music? Whatever it might be, you can reach me on any of these platforms for whatever kind of discussion you'd like to have!</Text>
                <address>
                    <Text className="font-mono text-gray-400 text-lg">Email: <a className="hover:text-gray-300" href="mailto:jkile9@gmail.com">jkile9@gmail.com</a></Text>
                    <Text className="font-mono text-gray-400 text-lg">Github: <a className="hover:text-gray-300" href="https://www.github.com/jkile">github.com/jkile</a></Text>
                    <Text className="font-mono text-gray-400 text-lg">LinkedIn: <a className="hover:text-gray-300" href="https://www.linkedin.com/in/jakekile">linkedin.com/in/jakekile</a></Text>
                    <Text className="font-mono text-gray-400 text-lg">Instagram: <a className="hover:text-gray-300" href="https://www.instagram.com/jkile9/">instagram.com/jkile9</a></Text>
                </address>
            </div>
        </Container>
    )
}
