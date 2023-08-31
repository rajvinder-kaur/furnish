import React from 'react'
import { Parent } from '../Styles/Common'
import { Td_1, Td_2, Td_3, Span, Ul, Li, H1 } from '../Styles/Benfits'
import picture from '../Assets/Img.jpeg';

function Benefits() {
    return (
        <Parent>
            <Td_1>
                <H1>Features</H1>
                <Ul>
                    <Li>Customizable furniture options</Li>
                    <Li>Expert craftsmanship and attention to detail</Li>
                    <Li>Use of high-quality materials</Li>
                    <Li>Personalized design consultations</Li>
                    <Li>Delivery and installation services</Li>
                </Ul>
            </Td_1>
            <Td_2>
                <H1>Benefits</H1>
                <Ul>
                    <Li>Customized furniture pieces tailored to individual
                        client needs and preferences</Li>
                    <Li>Exceptional attention to comfort and
                        functionality in every design</Li>
                    <Li>Incorporation of elegant and visually stunning
                        elements to enhance any space</Li>
                    <Li>High-quality materials and craftsmanship
                        ensuring durability and longevity of furniture</Li>
                    <Li>Collaborative process with clients to ensure their
                        vision and dreams are brought to life</Li>
                </Ul>
            </Td_2>
            <Td_3 src={picture} />
        </Parent>
    )
}

export default Benefits