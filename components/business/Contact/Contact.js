import React from 'react'
import Container from '../../layout/Container/Container'
import H2 from '../../typography/H2/H2'
import H6 from '../../typography/H6/H6'
import Text from '../../typography/Text/Text'

export default function Contact() {
    return (
        <Container className="py-24">
            <H2 color="white" className="font-bold mb-4">Contact Me</H2>
            <div className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-between">
                <Text color="gray-400" className="max-w-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam aliquam ad velit sit quam quia omnis placeat nihil et soluta.</Text>
                <address>
                    <H6 size="xl" color="gray-400" className="font-mono">Email: <a className="hover:text-gray-300" href="mailto:jkile9@gmail.com">jkile9@gmail.com</a></H6>
                    <H6 size="xl" color="gray-400" className="font-mono">Github: <a className="hover:text-gray-300" href="https://www.github.com/jkile">github.com/jkile</a></H6>
                    <H6 size="xl" color="gray-400" className="font-mono">LinkedIn: <a className="hover:text-gray-300" href="https://www.linkedin.com/in/jakekile">linkedin.com/in/jakekile</a></H6>
                    <H6 size="xl" color="gray-400" className="font-mono">Instagram: <a className="hover:text-gray-300" href="https://www.instagram.com/jkile9/">instagram.com/jkile9</a></H6>
                </address>
            </div>
        </Container>
    )
}
