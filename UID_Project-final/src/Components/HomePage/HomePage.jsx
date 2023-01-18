import React from 'react'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'

export default function HomePage() {
  return (
   <>
        <Navbar/>
      
       <center> <div class="content" >
          <div class="front">
           <img  src='https://www.ociarchitects.com/jb-content/uploads/2020/08/education24.jpg' width={1000} height={450}/>
          </div>
          <div class="back">
            {/* Back! */}
          </div>
        </div>
        </center>
     
   </>
  )
}
