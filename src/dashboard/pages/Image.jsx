import React from 'react'
import {Contain , Button} from '../styles/Image'
import { Img } from '../../Styles/Common'
import picture from '../../Assets/Img.jpeg'

function Image() {
  return (
    <Contain>
      <Img src={picture}  alt="" />
      <Button >Remove</Button>
    </Contain>
  )
}

export default Image