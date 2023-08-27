import React from 'react'
import { Td1, Main, Td2 ,Col_1 , Button , Col_2,Image} from '../Styles/Home_landing';
import picture from '../Assets/Img.jpeg';
function Home_landing() {
  return (
    <Main >
        <Col_1 class="col">
          <Td1>Dreamy furniture:
            comfort and
            elegance combined.</Td1>
          <Td2>Welcome to Furnish, where we bring your dream furniture pieces to life with a touch of
            elegance and comfort, tailored exclusively to your needs.</Td2>
          <Button>View projects</Button>
        </Col_1>
        <Col_2  >
          <Image src={picture} alt="" />
        </Col_2>
    </Main>
  )
}

export default Home_landing;

