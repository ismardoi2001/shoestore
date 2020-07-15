import React from 'react'
import Shoes from './../Shoes.json';
function Product() {

console.log(Shoes)

    return (
      
        <div>
          <h1> Welcome To Product </h1> 
          <div className="productContainer">
          
          {Object.keys(Shoes).map(keyName=>{
            const shoe = Shoes[keyName];
            return (<div key={keyName}>
              <link key={keyName}></link>
              <h4>{shoe.name}</h4>
              <img src={shoe.img} height={150}/>
             </div> )
             
          })}
          </div> 
        </div>
    )
}

export default Product;