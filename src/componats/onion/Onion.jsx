import React, { useEffect, useState } from 'react'

export default function products() {

    let [onion,setOnion]= useState([])

   const getOnion = async()=>{
    let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=Onion");
    let data=await reponse.json();
    data = data.recipes;
    setOnion(data);
   }
   useEffect (()=>{
    getOnion();
   },[])
  return (
    <>
    <div className='row'>
        {onion.map((ele)=>{
            return <div className='col-md-4' key={ele.recipe_id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100' />

            </div>
        })}

    </div>
  

    </>
  )
}