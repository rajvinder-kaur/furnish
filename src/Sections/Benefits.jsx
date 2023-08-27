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
                    <Li>Use of high-quaLity materials</Li>
                    <Li>PersonaLized design consultations</Li>
                    <Li>DeLivery and installation services</Li>
                </Ul>
            </Td_1>
            <Td_2>
                <H1>Benefits</H1>
                <Ul>
                    <Li>Customized furniture pieces tailored to individual
                        client needs and preferences</Li>
                    <Li>Exceptional attention to comfort and
                        functionaLity in every design</Li>
                    <Li>Incorporation of elegant and visually stunning
                        elements to enhance any space</Li>
                    <Li>High-quaLity materials and craftsmanship
                        ensuring durabiLity and longevity of furniture</Li>
                    <Li>Collaborative process with cLients to ensure their
                        vision and dreams are brought to Life</Li>
                </Ul>
            </Td_2>
            <Td_3 src={picture} />
        </Parent>
    )
}

export default Benefits