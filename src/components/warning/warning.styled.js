import styled from "@emotion/styled"

export const Div = styled.div `
    position: absolute;
    width: 100%;  
    left: 0px;
    top: 0px;
    margin: 0px;
    background: #C2E8CE;  
    font-size: calc(2px + 2vmin);
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
    font-weight: bold;     
`