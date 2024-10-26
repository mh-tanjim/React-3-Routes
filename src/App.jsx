import { useState } from 'react'

import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Help from './Pages/Help'
import Footer from './Components/Footer/Footer'
import NotFound from './Components/NotFound/NotFound'
function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path ='/' element = {<Home/>}/>
        <Route path ='/blog' element = {<Blog/>} />
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/help' element = {<Help/>}/>
        <Route path = '/*' element = {<NotFound/>}/>
      </Route>
    )
  )


  return (
    <>
      <Navbar/>
      <RouterProvider router={myRoute}/>
      <Footer/>

    </>
  )
}

export default App
