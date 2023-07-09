import styled from "styled-components";

export const Wrapper = styled.div`
padding: 0px 20px;
.option-div{
    bottom:5px;
    display:flex;
    .option-box-div{
        position:relative:
        width:100%;
        .presentation-image{
            cursor:pointer;
            font-weight:700;
            color:white;
            font-size: 15px;
            pointer-events: auto;
            margin: auto auto 15px;
            z-index:999;
            max-width:220px;
            width: auto;
            letter-spacing: 0.1em;
        }
        .presentation-image:hover{
            color:grey;
        }
        .option-image-div{
            width:100%;
            // position:relative;
        }
    }   
}


@media (min-width:320px) and (max-width:767px){
    .option-div{
        .option-box-div{
            .presentation-image{
                top:0px !important;
            }
        }  
    } 
}
`;