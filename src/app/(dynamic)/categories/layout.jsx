"use client"
import React from 'react'
import Page from '../../../component/swiperslide/slide'
import { usePathname } from 'next/navigation'

export default function layout({children}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = usePathname()
    console.log("🚀 ~ file: layout.jsx:9 ~ layout ~ pathname:", pathname)
    function show ( ){
        if(pathname!=="/categories"){
           return <Page/> 
        }
    }
  return (
    <>
        {show()}
      {children}

      
    </>
  )
}
