import styled from "@emotion/styled"

export const Div = styled.div`
    position: absolute;
    width: 1170px;
    height: 276px;
    left: 370px;
    top: 3380px;
    background: white;    
`
export const CarrouselImg= styled.div`    
    width: 156px;
    height: 156px;    
    top: 3399px;
    background: #FFFFFF;    
    border: 1px solid;
    box-shadow: 5px 10px #aaaaaa;
    /*box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);*/
`
export const Image = styled.img `
    width: 136px;
    height: 136px;
    margin-left: 9px;
    margin-top: 9px;    
    &:hover {        
        color:black;
        cursor: pointer;
        opacity: 0.5;   
        }
`

export const TituloCarrusel= styled.p`
    width: 1170px;
    height: 50px;
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
`
export const Link = styled.a`
    color: #FF8126; 
    ` 