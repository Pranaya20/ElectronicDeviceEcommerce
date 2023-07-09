import React,{ useEffect} from 'react';
// import Api from "../Services/Api";
import { Wrapper } from '../Assets/Style/SelectionItemsStyle';
import {PRESENTOPTION, SHOPITEMS} from "../Common/Constant";
import {useNavigate } from "react-router-dom";
import _map from "lodash/map";

function SelectionItems({data}) {
 const navigate = useNavigate();

 const onClickHandle = (category) => {
  navigate(`/smartphones?category=${category}`)
}
  return (
    <Wrapper>
      <div className='option-div'>
         {_map(PRESENTOPTION,(items, key)=>(
          <div className='option-box-div'>
             <img src={items.images} alt='items-image' className='option-image-div'/>
             <div className='presentation-image' onClick={()=>onClickHandle(items.category)}><span>{items.name}</span></div>
          </div>
         ))}
      </div>
      
      <div className='option-div'>
      {_map(SHOPITEMS,(items, key)=>(
          <div className='option-box-div'>
             <img src={items.images} alt='items-image' className='option-image-div'/>
             <div className='presentation-image'>{items.name}</div>
          </div>
         ))}
      </div>
    </Wrapper>
  )
}

export default SelectionItems