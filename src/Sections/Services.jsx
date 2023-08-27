import React from 'react'
import {Service ,Td_1, Td_2} from '../Styles/Services'
import Card from '../Subcomponents/Card'

function Services() {
  return (
    <Service>
        <Td_1>Our services</Td_1>
        <Td_2>
           <Card/> 
           <Card/> 
        </Td_2>
    </Service>
  )
}

export default Services