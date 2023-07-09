import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
position: relative;
flex-shrink: 0;
box-sizing: border-box;
// width: 71vw;
background-color: rgb(255, 255, 255);
margin-top: 0px;
margin-left: auto;
margin-right: auto;
padding-top: 52px;
.garments-icon{
    display: flex;
    flex-direction: column;
    -webkit-box-align: stretch;
    align-items: stretch;
    line-height: normal;
    width: calc(100% - 0px);
    margin-left: 0px;
}
.builder-block{
  position:absolute;
   top:50%;
  font-size: 40px;
  font-weight: 700;
  color:white;
}
@media (min-width:320px) and (max-width:991px){
   .builder-block{
    display:none;
   }
}
`;