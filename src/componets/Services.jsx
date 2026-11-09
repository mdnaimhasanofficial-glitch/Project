import { useEffect, useState } from "react";


export default function Services() {

  const [product, setProduct] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((data)=>setProduct(data));
  }, [])
// console.log(product)
  return (
    <div>
     {
      product.map((item)=>(
        <div key={item.id}>
          <h3>{item.name}</h3>
          <h3>{item.username}</h3>
          <h3>{item.email}</h3>
          <h3>{item.address.street}</h3>
          <h3>{item.address.suite}</h3>
          <h3>{item.address.city}</h3>
          <h3>{item.address.zipcode}</h3>
          <h3>{item.address.geo.lat}</h3>
          <h3>{item.address.geo.lng}</h3>
          <h3>{item.phone}</h3>
          <h3>{item.website}</h3>
          <h3>{item.company.name}</h3>
          <h3>{item.company.batchPhrase}</h3>
          <h3>{item.company.}</h3>
        </div>
      ))
     }
    </div>
  )
}
