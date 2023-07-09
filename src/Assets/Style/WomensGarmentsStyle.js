import styled from "styled-components";

export const Wrapper = styled.div`
padding:0px 20px 0px;
margin-top:100px;
.gallery-grid-container--XDZDt {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    max-width: 1400px;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    position: relative;
      z-index: 0;
        .MuiCircularProgress-root{
          position: relative;
          width: 54px;
          height: 17px;
          display: flex;
          left: 50%;
          top: 108px;
          z-index: 99;
      }
  .gallery-grid--qTRRj {
    margin-top: 21px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    // justify-content: space-between;
  }
  .price--EotcN{
    display:flex;
    justify-contain:space
  }
  .gallery-grid--qTRRj>div {
    color:white;
    width: calc((100% - 36px)/4) !important;
    margin-right: 10px;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 50px;
    z-index: 1;
    :last-child{
      margin-right: 0px !important;
    }
    @media (min-width: 767px) and (max-width: 1024px) {
      margin-right: 36px;
      width: calc((100% - 36px)/2) !important;
     }
    @media (min-width: 500px) and (max-width: 767px) {
      margin-right: 18px;
      justify-content:space-between;
      width: calc((100% - 18px)/2) !important;
     }
      @media (min-width: 320px) and (max-width: 500px) {
        height:185px;
        margin-right: 10px;
        margin-bottom:80px;
        justify-content:space-between;
        width: calc((100% - 18px)/2) !important;
        // margin-right: 10px;
        //  width: calc((100% - 36px)/) !important;
        // width:50% !important;
        // height:185px;
      }
  }
   @media (min-width: 500px) and (max-width: 1024px) {
   
    .gallery-grid--qTRRj>div:nth-of-type(2n) {
      margin-right: 0 !important;
    }
  }
  @media (min-width: 320px) and (max-width: 500px) {
    .gallery-grid--qTRRj>div:nth-of-type(2n) {
      margin-right: 0 !important;
    }
  }
  .gallery-grid--qTRRj>div:nth-of-type(4n) {
    margin-right: 0 !important;
  }
  .item-container--C33E5 {
    .MuiBox-root{
      .MuiCircularProgress-root{
        position: relative;
        width: 40px;
        height: 40px;
        bottom: 168px;
        left: 43%;
        z-index: 1000;
      }
    }
  }
  .image-container--bbSdi {
    cursor: pointer;
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    // border: 1px solid black;
    display: flex;
    flex-wrap:wrap
    flex-direction: column;
    position: relative;
    z-index: 1;
    background: #f6f9fc;
    @media (min-width: 320px) and (max-width: 500px) {
        height:181px !important;
      }
  }
`;