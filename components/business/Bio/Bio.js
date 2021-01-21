import React from 'react'
import Container from '../../layout/Container/Container'
import H3 from '../../typography/H3/H3'
import Text from '../../typography/Text/Text'
import ImageIcon from '../../ui/ImageIcon/ImageIcon'

export default function Bio() {
    return (
        <Container>

            <div className="py-6 ">
                <div className="flex flex-col space-y-4 lg:space-y-0 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4">
                        <H3 color="white" className="font-bold" size="6xl"> A bit about me...</H3>
                        <Text color="gray-400" size="lg" className="max-w-sm md:max-w-md lg:max-w-lg">
                           I like to get my hands into a bit of everything. I appreciate simple design and displaying information clearly and concisely (as you may be able to tell). When I am not creating software or websites,
                           you can often find me recording music, writing code generate music, helping other folks record their music, taking photos, learning about new gizmos and gadgets, and finding time to learn something new as much
                           as I possibly can. Take a look at some of my work! There's a pretty wide breadth and I'm sure you'll find something that will be of interest to you.
                        </Text>
                    </div>
                    <ImageIcon src="/assets/tree.png" size={256} className="object-cover lg:w-80 lg:h-80" />
                </div>
            </div>
        </Container>
    )
}
