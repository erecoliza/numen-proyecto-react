import styled from "@emotion/styled"

export const Div = styled.div`
    /* Our Partner */
    position: absolute;
    width: 1280px;
    height: 395px;
    left: 320px;
    top: 2322px;
    background: #6090C3;
`
export const H1 = styled.h1`
    /* Our Charity Partner, City Bakery */

    position: absolute;
    width: 770px;
    height: 40px;
    left: 254px;
    top: 60px;

    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    color: #FFFFFF;
`

export const BottomLearn = styled.button`
    position: absolute;
    left: 475px;
    top: 290px;
    width:350px;
    height: 45px;    
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    border-color: #FF8126;
    background: #FF8126;
    border-radius: 5px;
    color: #FFFFFF;

`
export const Image = styled.img `
    position: absolute;
    top: 100px;
    left: 555px;    
    width: 150px;
    height: 180px;
    
    draggable="false";   
    &:hover {        
        color:black;
        cursor: pointer;
        opacity: 0.5;   
        }
`