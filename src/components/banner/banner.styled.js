import bannerimg from '../../assets/banner-img.png';
import styled from "@emotion/styled"

export const Div = styled.div`
    /* Banner */
    position: absolute;
    width: 1280px;
    height: 500px;
    left: 320px;
    top: 285px;   
    backgroundImage: url("${bannerimg}");    
`
export const Titulo = styled.div `
    
    width: 570px;
    height: 60px;
    left: 55px;
    top: 266px;
`
export const TextTitulo = styled.div `
    position: absolute;
    left: 55px;
    top: 125px;
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    color: #1F1F1F;
`
export const TextSubTitulo = styled.div `
    position: absolute;
    left: 55px;
    top: 190px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 39px;
    color: #1F1F1F;

`

export const BrowseBottom = styled.button`
    position: absolute;
    width: 200px;
    height: 45px;
    left: 61px;
    top: 268px;

    /* Browse bands */
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    /* identical to box height */

    color: #FFFFFF;
    border-color: #FF8126;
    background: #FF8126;
    border-radius: 5px;
`