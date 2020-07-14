import React from 'react'
import { useParams } from 'react-router-dom';

function Productitem() {
  const { id} = useParams();
  console.log(id)

    return (
        <div>
          <h1>Welcome To Productitem</h1>  
        </div>
    )
}

export default Productitem;