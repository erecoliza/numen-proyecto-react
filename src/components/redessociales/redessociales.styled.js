import styled from "@emotion/styled"

export const Div = styled.div `
    position:absolute;
    top: 100px;
    width: 100%;
    height: 130px;
    left: 0px;
    display: flex;
    gap: 30px;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap; 
 `
 
export const Image = styled.img `
    width: 60px;
    height: 60px;
    draggable="false";
    &:hover {        
        color:black;
        cursor: pointer;
        opacity: 0.5;   
        }
`