import React from 'react'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (  
    <div>

    <Header/>

    <div className='mainbody' >{children}</div>

    <footer className="mt-5  bg-dark text-light p-3 text-center">
        &copy; Copy right all reserver 2023
      </footer>
</div>
  )
}
