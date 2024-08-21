import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillFileSlidesFill } from 'react-icons/bs';
import BillCard from './BillCard';
import { Navigate,useNavigate } from 'react-router-dom';

export default function AllBills() {
 
  let navigate=useNavigate();

  const [bills, setbills]=useState([]);

  const baseurl=process.env.REACT_APP_API_URL+"/advertise/bills";
  const getdata=()=>{
    axios.get(baseurl)
  .then((res)=>{
     console.log(res.data);
     setbills(res.data);
  })
  }

  useEffect(()=>{
    if(localStorage.getItem('authtoken')==null){
      navigate("/signin")
}
    getdata();
 
      

  },[])
  return (
    <div style={{textAlign:"center", marginTop:"15px"}}>
    <u>  <h1>MANAGE BILLS </h1></u>
      { 

        bills.map((bill)=>{
          return(
            <>
             <BillCard bill={bill}></BillCard>
            </>
          )
        })

      }

    </div>
  )
}
