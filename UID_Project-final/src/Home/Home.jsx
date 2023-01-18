import React,{useState,useEffect} from 'react'
import './Home.css'

export default function Home() {

    const [src,setSrc] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNivMKkN9XqUUmQmRnH4vpnVNzSw64Fpqo0eu2TbqLA&s')

    function change() {
        console.log("first")
        setSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNivMKkN9XqUUmQmRnH4vpnVNzSw64Fpqo0eu2TbqLA&s")
        console.log(src)
    }

    setTimeout(change, 1400);
    useEffect(()=>{
        console.log(src)

    },[src])

  return (
    <>
        <div className="center">
        <div className="bus-img">
            <img src={src} alt="" />
        </div>
        </div>
      
    </>
  )
}
