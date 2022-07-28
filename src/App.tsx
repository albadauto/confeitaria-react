import React from 'react'
import Footer from './components/Footer/Index'
import { GlobalStyle } from './globalstyle'
import { ToastContainer } from "react-toastify"
import Routes from './routes'
export default function App() {
  return (
    <>
      <Routes />
      <Footer/>
      <GlobalStyle />
      <ToastContainer />
    </>
  )
}
