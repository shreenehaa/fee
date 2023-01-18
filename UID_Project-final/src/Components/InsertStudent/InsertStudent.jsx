import React from 'react'
import './InsertStudent.css'
import Navbar from '../Navbar/Navbar'

export default function InsertStudent() {
  return (
    <>
        <Navbar/>
        
         <div className="form-body">
          
          <form action="http://localhost:4000/newStudent" method="post">
            Name:
            <input class="form-control"  type="text" name="sname" id="" /><br/>
            Roll number:
            <input class="form-control"  type="text" name="rollNo" id="" /><br/>
            Parent name
            <input class="form-control"  type="text" name="dest" id="" /><br/>
            <br/>
            Department:
            <select className='form-select' name="bno" id="">
                <option value="" disabled selected>Select your department</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="CIVIL">CIVIL</option>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="EI">E&I</option>
                <option value="MECH">MECHANICAL</option>
                <option value="MECHTRONICS">MECHATRONICS</option>
                <option value="FT">FT</option>
                <option value="AI">AI &ML</option>

            </select>
            <br/>
            <button type="submit" class="btn btn-primary">Add Student</button>
          </form>
         </div>
         
    </>
  )
}
