import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './../Shoes.json';

function Productitem() {
  const { id } = useParams();
  const shoe = Shoes[id];
  console.log(shoe)

  if(!shoe)
   return<h2>Product not Found</h2>

    return (
        
        <div>
         <h1> Welcome to Product Item</h1>
         <div  className="link">
         <h4>{shoe.name}</h4>
         <img src={shoe.img} height={150}/>
         </div> 
        </div>
    )
}

export default Productitem;