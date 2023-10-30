import React, { useEffect, useState } from 'react'

export default function products() {

    let [salad,setSalad]= useState([])

   const getSalad = async()=>{
    let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=Salad");
    let data=await reponse.json();
    data = data.recipes;
    setSalad(data);
   }
   useEffect (()=>{
    getSalad();
   },[])
  return (
    <>
    <div className='row'>
        {salad.map((ele)=>{
            return <div className='col-md-4' key={ele.recipe_id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100' />

            </div>
        })}

    </div>
  

    </>
  )
}
