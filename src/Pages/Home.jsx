import React from 'react'
import Home_landing from '../Sections/Home_landing'
import Services from '../Sections/Services'
import Benefits from '../Sections/Benefits'

function Home() {
  return (
    <div>
        <Home_landing/>
        <Services/>
        <hr />
        <Benefits/>
    </div>
  )
}

export default Home