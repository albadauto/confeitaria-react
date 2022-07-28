import React from 'react'
import Header from './components/Header/Index'
import { GlobalStyle } from './globalstyle'
import Routes from './routes'
export default function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  )
}
