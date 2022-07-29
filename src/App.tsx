import React, { useEffect, useState } from 'react'
import Footer from './components/Footer/Index'
import { GlobalStyle } from './globalstyle'
import { ToastContainer } from "react-toastify"
import { Hearts } from 'react-loader-spinner'
import Routes from './routes'
import Header from './components/Header/Index'
import "./App.css"
export default function App() {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000)
  })

  return (
    <>
      {loader ?
        <div className="loader">
          <Hearts
            height="150"
            width="150"
            color='#F57ED6'
            ariaLabel='three-dots-loading'
          />

        </div>
        :
        <div className="containerAll">
          <Header />
          <Routes />
          <Footer />
          <GlobalStyle />
          <ToastContainer />
        </div>

      }


    </>
  )
}
