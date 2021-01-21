import React from 'react';
import H5 from '../../typography/H5/H5';
import H6 from '../../typography/H6/H6';
import Card from "../../ui/Card/Card";
import ImageIcon from '../../ui/ImageIcon/ImageIcon';
import Text from "../../typography/Text/Text";
import Button from '../../ui/Button/Button';

export default function GenreCard(props) {


    return (
        <div>
            <div className="max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-sm">
                <Card >
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-4">
                            <ImageIcon src={props.imageSrc} />
                            <div>
                                <H5 className="font-semibold" color="gray-100">{props.header}</H5>
                                {/* <H6 color="gray-300">Test Title</H6> */}
                            </div>
                        </div>
                        <Text color="gray-400" size="sm">
                            {props.text}
                        </Text>
                        <div>
                            <Button size="2" color={props.buttonColor}> {props.children} </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}