import React,{useState, useEffect} from 'react';
import { Wrapper } from '../Assets/Style/WomensGarmentsStyle';
import LoaderComp from '../Components/LoaderComp';
import HeroSection from '../Components/HeroSection';
import mobileBackground from "../Assets/Image/mobileBackground.jpg";
import _map from "lodash/map";
import {useNavigate } from "react-router-dom";
import axios from 'axios';

function SmartPhone() {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const category =queryParams.get('category');
 
    const url = 'https://dummyjson.com/products/';
    const [data, setData] = useState();
    console.log("data:-",data);
    const array = [];

    const onClickHandle = (productslno) => {
      navigate(`/productdescription/?productslno=${productslno}`)
    }

    const fetchInfo = (category) => {
        return axios.post(url).then((res) =>res.data.products.filter(
          function(list){
                    if(list.category == category){
                      array.push(list);
                      return setData(array)  
          
                    }
                  }
        ));
      };
    
      useEffect(() => {
        fetchInfo(category);  
      }, []);

  return (
    <Wrapper>
          <HeroSection image={mobileBackground}/>
           <div className="gallery-grid-container--XDZDt">
              <div className="gallery-grid--qTRRj">
                {_map(data, (items, key) => (
                  !items === undefined? <LoaderComp/>:
                  <div key={key} /*style={{padding:"5px"}}*/>
                    <div className="promotion-container--QYED5">
                      <div className="item-container--C33E5">
                          <img className="image-container--bbSdi" onClick={()=>onClickHandle(items?.id)} src={items?.images[0]} alt="image" style={{width:"300px",height:"300px"}} />
                      </div>
                      <div className="itemData--IKVIy">
                        <div className="itemTags--WmwVA"></div>
                        <div className="titleAndWishlist--Tg1kt">
                          <div className="itemTitle--FVCGg">
                            
                          </div>
                          <div className="rootRippleButton--_LSi0 btnWishListWrapper--TqAmW wishlistWrapper--gzgPy newDesign--fyE5Q" >
                           
                              
                          </div>
                        </div>
                        <div className="bottom--A0oq4"><div className="--TX9tV gallitemPriceContainereryItem--VpIo6 newGalleryStyle--TVlx4">
                          <div className="priceWrapper--AOyAi newGalleryStyle--TVlx4">
                            <div className="priceContainer--xSe_e">
                                <div className="price--EotcN" data-qa="price2-itemPage_Desktop">
                                    {items?.title}
                                   
                                </div>
                                <div className="price--EotcN" data-qa="price2-itemPage_Desktop">
                                    {items?.description}
                                </div>
                                <div className="price--EotcN" data-qa="price2-itemPage_Desktop">
                                ${items?.price}
                                </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                ))}
              </div>
            </div> 
    </Wrapper>
  )
}

export default SmartPhone







