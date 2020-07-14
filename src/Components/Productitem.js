import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './../Shoes.json';

function Productitem() {
  const { id } = useParams();
  const shoe = Shoes[id];
  console.log(shoe)

    return (
        <div>
          <h1>Welcome To Productitem</h1>  
        </div>
    )
}

export default Productitem;