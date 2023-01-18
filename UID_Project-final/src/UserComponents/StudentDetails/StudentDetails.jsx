import React,{useState,useEffect} from 'react'
import './StudentDetails.css'


export default function StudDetails() {

    const [student,setStudent] = useState([])
    const [search,setSearch] = useState('')

    const [find,setFind] = useState('')

    const getData = ()=>{
        fetch('http://localhost:4000/allDetails',{
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          },
          method:'get'
        }) 
        .then((obj)=>obj.json()) 
        .then((value)=>{
            setStudent(value);
        })  
    }

    useEffect(()=>{
        getData();
    },[])


  return (
    <>
        <div className="container ">
       <div className="search-add">
       <input type="text" className='form-control my-4' onChange={(event)=>{setSearch(event.target.value)}} placeholder='Search by Name '/>
       <select className='form-select drop' name="bno" id="" onChange={(event)=>{setFind(event.target.value)}}>
                <option value="" disabled selected>Select your department</option>
                
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="CIVIL">CIVIL</option>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="EI">E&I</option>
                <option value="MECH">MECHANICAL</option>
                <option value="MECHATRONICS">MECHATRONICS</option>
                <option value="FT">FT</option>
                <option value="AI">AI &ML</option>

            

            </select>   
       </div>
        <div className="card-group mt-4">
        {
            student.filter((value)=>{return (value.sname.toLowerCase().includes(search.toLowerCase()) && value.bno.toLowerCase().includes(find.toLowerCase())) }).map((stud)=>{
                return(
                    <div className="card">
                       
                        <div className="card-body">
                        <h6>Student Name : {stud.sname}</h6>
                            <h6>roll number : {stud.rollNo}</h6>
                            <h6>Department : {stud.bno}</h6>
                            <h6>parent Name: {stud.dest}</h6>
                            
                            <a href={`/studData/${stud._id}`}><button type="button" class="btn btn-light">Details</button></a>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
        <div style={{"margin-bottom":"40px"}}></div>
    </>
  )
}
