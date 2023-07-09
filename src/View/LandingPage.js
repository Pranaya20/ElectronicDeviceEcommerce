import React,{useState, useEffect} from 'react';
import HeroSection from '../Components/HeroSection';
import HeadingSection from '../Components/HeadingSection';
import SelectionItems from '../Components/SelectionItems';
import background from "../Assets/Image/background.jpg";
// import background from "../Assets/Image/background.jpg";
import axios from 'axios';

function LandingPage() {
  const url = 'https://dummyjson.com/products/';
  const [data, setData] = useState([]);

  const fetchInfo = () => {
      return axios.post(url).then((res) => setData(res.data));
    };
  
    useEffect(() => {
      fetchInfo();
    }, []);
  return (
    <div>
         <HeroSection image={background}/>
        <HeadingSection/>
        <SelectionItems data={data}/>
    </div> 
  )
}

export default LandingPage