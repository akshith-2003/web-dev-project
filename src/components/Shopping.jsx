import React,{useEffect, useState}from 'react'
import "./shopping.css"

const Shopping = () => {
    const [apiData,setApiData]=useState(null);
    const [searchInput,setSearchInput]=useState("");
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{console.log(json)
                setApiData(json)  });
      }, [])
    
  return (
    <div>
        <h1>Shopping</h1>
        <div><input type='text' placeholder='search' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}>
        </input></div>

        <div className='product-wrapper'>
            {apiData?.filter((filtered_value)=>{
                if(searchInput===""){
                    return filtered_value;
                }
                else if(filtered_value?.title?.toLowerCase()?.includes(searchInput?.toLowerCase()))
                {
                    return filtered_value;
                }
            })
            ?.map((data,index) => {
                return  (
                <div key={data?.id} className='product-card'>
                    
                    <div className='image-wrapper'>   
                   <img src={data?.image} ></img>
                    </div>
                    <div >
                        <h3 className="product-name">{data?.title}</h3></div>
                  
                   <div className='cat-price-wrapper'>
                     
                    <p>{data?.category}</p>
                    <p>${data?.price}</p>
                    </div>
                    </div>
                    )
                    
            })}
        </div>
    </div>
    
  )
}

export default Shopping