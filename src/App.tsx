import React from 'react'
import Footer from './components/Footer/Index'
import Header from './components/Header/Index'
import { GlobalStyle } from './globalstyle'
import Routes from './routes'
export default function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer/>
      <GlobalStyle />
    </>
  )
}
