import React from "react";
import { Content, Wrapper, Text } from "./HeroImage.style";


const HeroImage = ({ image, title, text }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);


export default HeroImage;