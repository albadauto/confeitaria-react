import React from 'react'
import Footer from './components/Footer/Index'
import { GlobalStyle } from './globalstyle'
import { ToastContainer } from "react-toastify"
import Routes from './routes'
import Header from './components/Header/Index'
export default function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer/>
      <GlobalStyle />
      <ToastContainer />
    </>
  )
}
