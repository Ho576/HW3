import React, { useEffect, useState } from 'react'

export default function products() {

    let [pizza,setPizza]= useState([])

   const getPizza = async()=>{
    let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=Pizza");
    let data=await reponse.json();
    data = data.recipes;
    setPizza(data);
   }
   useEffect (()=>{
    getPizza();
   },[])
  return (
    <>
    <div className='row'>
        {pizza.map((ele)=>{
            return <div className='col-md-4' key={ele.recipe_id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100' />

            </div>
        })}

    </div>
  

    </>
  )
}