import React from 'react'
import picture from '../Assets/Img.jpeg'
import { Li, Image, Heading, Para } from '../Styles/Card'

function Card() {
    return (
        <Li>
            <Image src={picture} />
            <Heading>Fix It Furniture</Heading>
            <Para>Got a broken chair or a scratched table? No worries,
                we'll fix it up good as new – just leave it to our
                furniture repair…</Para>
        </Li>
    )
}

export default Card