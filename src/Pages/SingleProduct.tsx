import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { useParams } from "react-router-dom"

export default  function Singlepage(){
  const {id} = useParams()
  console.log(id)
    const [userdata,setuserdata]=useState<any>({})
    let num = id;    
      useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/' + num).then(
            (res)=>{
                console.log(res.data)
                setuserdata({...res.data})
            }
            
        ).catch(
            (err)=>{
                console.log(err)    
            }
        )
        
      },[])  
    return<>
    <p><img src={userdata.image} alt=""  style={{ width: 200 }}/></p>
    <h5>Title</h5>
    <p>{userdata.title}</p>
    <h5>Count</h5>
    <p>{userdata.title ? userdata.rating.count : userdata.price}</p>
    <h5>Rate</h5>
    <p>{userdata.title ? userdata.rating.rate : userdata.price}</p>
    </>
}