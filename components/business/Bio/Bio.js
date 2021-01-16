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
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nam sunt ex a animi omnis tenetur! Vitae enim labore nam quis nihil nemo soluta facilis odit temporibus hic et eveniet, magnam porro blanditiis modi quisquam accusantium accusamus deserunt, cupiditate distinctio quia. Tempora adipisci, accusamus amet vitae quis nihil alias deleniti?
                        </Text>
                    </div>
                    <ImageIcon src="/assets/tree.png" size={256} className="object-cover lg:w-80 lg:h-80" />
                </div>
            </div>
        </Container>
    )
}
