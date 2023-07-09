import React,{useState, useEffect} from 'react';
import _map from "lodash/map";
import {Wrapper} from '../Assets/Style/ProductDescriptionStyle';
import axios from 'axios';
import mobileBackground from "../Assets/Image/mobileBackground.jpg";

function ProductDescription() {
    const queryParams = new URLSearchParams(window.location.search);
    const productslno =queryParams.get('productslno');
    console.log("productslno:-",productslno);
    const url = 'https://dummyjson.com/products/';
    const [data, setData] = useState([]);
    console.log("data:-",data);

    const fetchInfo = (productslno) => {
        return axios.post(url).then((res) =>res.data.products.filter(
          function(list){
                    if(list.id == productslno){
                      return setData([list])  
          
                    }
                  }
        ));
      };

      useEffect(() => {
        fetchInfo(productslno);  
      }, []);
  return (
    <Wrapper>
        <div></div>
       
            {_map(data,(list,key)=>(
            <div className='product-delail-div'>
                <div className='product-image'>
                    <div className='btn-div'>
                        {_map(list.images,(listImages, key)=>(
                          <button className='sub-button'><img src={listImages} alt="product-icon" className='btn-image'/></button>
                        ))}    
                    </div>
                    <div className='main-product'>
                        <img src={list.images[0]} alt="product-icon"  className='product-main-image' />
                    </div>
                 </div>
                    
                <div className='product-description'>
                    <h1>{list.title}</h1>
                    <p>{list.description}</p>
                    <h3>$ {list.price}</h3>
                    <h4 className='custom-saved-price'>{list.discountPercentage}% off</h4>
                    <h3>Check Delivery</h3>
                </div>  
            </div>
             ))} 
        
    </Wrapper>
  )
}

export default ProductDescription