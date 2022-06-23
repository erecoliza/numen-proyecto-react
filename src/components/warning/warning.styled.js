import styled from "@emotion/styled"

export const Div = styled.div `
    position: absolute;
    width: 1280px;
    top: 100px;
    left: 320px;
    height: 50px;   
    margin: 0px;
    background: #C2E8CE;  
    font-size: calc(2px + 1.5vmin);
    display: flex;    
    justify-content: flex-end;     
`

export const Image = styled.img `
    width: 30px;
    height: 30px;
    margin-top: auto;
    margin-bottom: auto; 
    margin-left: calc(100% / 4 )  ;    
    margin-right: 40px;
    &:hover {        
        color:black;
        cursor: pointer;
        opacity: 0.5;        
        }

`
export const H3 = styled.h3 `






    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */
    text-align: center;
    font-weight: bold;     
`