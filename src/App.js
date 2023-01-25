
import './App.css';
import Resetpass from './Resetpass';
import { Router,Route,Link, Routes} from "react-router-dom";
import Home from './Home';
import ResetAuth from './ResetAuth';
import { date } from 'yup/lib/locale';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
// const [users,setUsers]=useState("")

//   const getuser=()=>{
//     // fetch("https://forgor-reset.onrender.com/",{
//     //   method:"GET",
//     // }).then((data)=>{data.text(); console.log(data)})
//     // .then((res)=>setUsers(res))
//     fetch("https://630dd315b37c364eb70c4e81.mockapi.io/movie_list")
//     .then((data)=>{data.json()})
//     .then((res)=>console.log(res));




//   }

//   useEffect(()=>getuser(),[]);

useEffect(()=>{
  axios.get("https://forgor-reset.onrender.com/api/users")
  .then((data)=>console.log(data));
}
  ,[])
  return (
    <div className="App">
      
      <h1>Project for Rest Password</h1>
      {/* <p>This is response{users}</p> */}


      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/resetauth'element={<ResetAuth/>}/>
        <Route path='/resetpassword'element={<Resetpass/>}/>
      </Routes>



    </div>
  );
}

export default App;
