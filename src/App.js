import React from 'react'
import Nav from './FirstPage/Nav'
import Home from './FirstPage/Home'
import Reviews from './FirstPage/Reviews'
import Footer from './FirstPage/Footer'
import {Route,Routes } from 'react-router-dom'
import NowPlay from './Moviespage/NowPlay'
import Popular from './Moviespage/Popular'
import TopRate from './Moviespage/TopRate'
import UpComing from './Moviespage/UpComing'
import Loading from './loading/Loading'
import Singlemovie from './Moviespage/Singlemovie'



export default function App() {
  
  
  return (
    <div>
      <Loading/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nowPlaying" element={<NowPlay/>} />
        <Route path="/Popular" element={<Popular/>} />
        <Route path="/TopRate" element={<TopRate/>}/>
        <Route path="/UpComing" element={<UpComing/>}/>
        <Route path="/Single/:id" element={<Singlemovie/>}/>

        

       
       

        

       
      </Routes>

      <Reviews/>
      <Footer/>
     
    
      
      

      


    </div>
  )
}
