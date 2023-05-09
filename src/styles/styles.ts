"use client";
import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Poppins Light', sans-serif;
        font-display: fallback;
    }
p{
    font-display: fallback;
}
span{
    font-display: fallback;
}
div{font-display: fallback;}

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background-color: #eff0f7;
        overflow-x: hidden;
        max-width: 100vw;
    }

    a:hover {
        color: #18216d;
    }

    .header{
        
    }

    .headerVisible{
        visibility: visible;
        transition: all 0.3s;
        padding-left: 2rem;
        padding-right:1rem;
    }
    .headerHidden {
        visibility: hidden;
        transition: all 0.3s;
        transform: translateY(-100%);
    }
    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Poppins Bold', serif;
        // color: #18216d;
        // font-size: 56px;
        line-height: 1.18;
        font-display: fallback;
        @media only screen and (max-width: 890px) {
        //   font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
        //   font-size: 32px;
        }
    }

    p {
        // color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .ant-modal-content{
        border-radius:10px;
    }
    .ant-modal-body{
        padding-bottom:0;
    }
    .ant-modal{
        position: relative;
    top: 8%;
margin: auto;
}

// .ant-carousel .slick-prev{
//     left:100px;
// }
// .ant-carousel .slick-next{
//     right:100px;
// }
.ant-carousel .slick-prev,
.ant-carousel .slick-next {
  color: #2f327d;
  font-size: 30px;
  font-weight:600;
}

.ant-carousel .slick-prev:hover,
.ant-carousel .slick-next:hover,
.ant-carousel .slick-prev:focus,
.ant-carousel .slick-next:focus {
  color: #2f327d;
}
`;
