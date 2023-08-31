import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Image from './dashboard/pages/Image'
import Home from './Pages/Home'
import Dashboard from './dashboard/Main'


function Router() {
  return (
    <Routes>
      <Route path="/dashboard"  element={<Dashboard/>}  />
      <Route path="/"  element={<Home/>}  />
      {/* <Route path=" "  element={}  />
      <Route path=" "  element={}  />
      <Route path=" "  element={}  />
      <Route path=" "  element={}  /> */}
    </Routes>
  )
}

export default Router