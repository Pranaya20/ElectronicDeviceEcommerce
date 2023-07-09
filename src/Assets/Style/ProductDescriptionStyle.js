import styled from "styled-components";

export const Wrapper = styled.div`
   margin-top:100px;
   padding:0px 15px ;
   .product-delail-div{
    width:100%;
     display:flex;
     justify-content:inbetweem;
     align-items:center;
   }
   .product-image{
    display:flex;
   }
   .btn-image{
    min-width:64px;
    height:50px;
    width:64px;
   }
   .sub-button{
    display:flex;
    display:column;
    margin-bottom:7px;
    margin-right:10px;
    border-radius:10px;
   }
   .bth-div{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
   }
   .main-product{
    max-width:100%;
    height:100%;
   
   }
   .product-main-image{
    width:100%;
    height:100%;
    border-radius:20px;
   }
   .custom-saved-price {
    margin: 0 10px 0 0;
    font-weight: 500;
    font-size: 14px;
    color: #00c68c;
}
.pincode_checker_container {
    grid-template-areas:
        "right"
        "right1"
        "right2";
    background: #fff;
    margin-top: 0px;
    padding-top: 0px;
    padding-left: 0px;
}
.pincode_checker {
    width: 60%;
    border: 1px solid #dce1e6;
    border-radius: 10px;
    padding: 0px;
    justify-content: center;
    height: 46px;
}
.product-description{
    margin-left:30px;
    color:white;
}
.pincode_details {
    margin-block: 8px;
    grid-area: right1;
}

`;