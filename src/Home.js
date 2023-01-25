
import React,{useState} from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function Home(){

    const navigate=useNavigate();
    return(
        <div>
            This is Home page
            <div>
             <Button variant="contained" onClick={()=>navigate("/resetauth")}>Click Here for Reset</Button>

        </div>
           
            
        </div>
    )
}