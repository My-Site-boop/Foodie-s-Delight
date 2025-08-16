import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Maincomponent() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
