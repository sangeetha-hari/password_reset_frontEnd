import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const formvalidation=Yup.object({
  email:Yup.string().email().required("Please Enter your emailID")
})

export default function ResetAuth() {
const [done, setDone]=useState("");

  const {values,errors,handleBlur, handleChange,handleSubmit}= useFormik({
    initialValues:{email:""},
    onSubmit:(values)=>{
      console.log(values.email)
      const sendemail={
        "email":values.email
      }
      console.log(sendemail);
      try {
        axios.post("https://forgor-reset.onrender.com/api/users/forgot_password",sendemail, {
        headers: {
            // 'authorization': your_token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((res)=>{console.log(res); setDone(res.data.message)})
      } catch (error) {
        setDone("Invalid Credentials");
      }

      
     
    }
  })
  return (
    <div>
      <h1>
                This is Password reset Authentication
            </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            type="email"
            id="email"
            name="email"
            placeholder="Email:"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p>{errors.email}</p>
        </div>
        <div>
          <Button type="submit" variant="contained">
            {" "}
            Submit
          </Button>
        </div>
      </form>
    <h1>{done}</h1>

    </div>
  );
}
