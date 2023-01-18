import React from 'react'
import './Login.css'


export default function Login() {
  return (
    <>
    
        <div className="log-in">
        
          
        
        <div className="row">
        <div className="col">
            <a href="http://localhost:3000/studDetails/"><button class="btn btn-primary"> student </button></a>
            {/* <a href="http://localhost:3000/Nav"><button class="btn btn-primary"> student </button></a> */}
          </div>
          <div className="col">
            <a href="http://localhost:3000/studentdetails"><button class="btn btn-primary">Admin</button></a>
          </div>
          </div>
          <br>
          </br>
          <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
 

        
          <div className="admin-log">
          
          <img src="https://3.imimg.com/data3/CF/VL/MY-9763253/fee-management-system-500x500.png"/>
        </div>
        </div>
    </>
  )
}
