import styled from "@emotion/styled"

export const Div = styled.div`
    /* Head */
    position: absolute;
    width: 1171px;
    height: 95px;
    left: 375px;
    top: 170px;
`
export const Image = styled.img`
    /* logo */
    position: Absolute;
    width: 110px;
    height: 95px;
    left: 55px;
    top: 20px;    
`
export const Imagedrop = styled.img`
    /* Dropmenu imagen */    
    width: 10px;
    height: 10px;  
    margin-left:10px;     
`
export const Menu = styled.div`
    /* logo */
    position: absolute;
    width: 654px;
    height: 230px;
    left: 110px;
    top: 40px;
    display: flex;   
    flex-direction: row;
    justify-content:Space-evenly;   
    column-gap: 11px;      
    `
export const Navbar = styled.div`
    overflow: hidden;
    background-color: white;    
    `   
export const Dropdown = styled.div`
    float: left;
    overflow: hidden;
    font-size: 16px;  
    border: none;
    outline: none;
    color: white;    
    background-color: inherit;
    font-family: inherit;
    margin: 0;       
    &:hover {        
        background-color: #ddd;         
        display: block;       
        }
    `
export const Anchor = styled.a `
    float: left;
    font-size: 16px;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;  
    &:hover {        
        background-color: #ddd;                 
        }
    `
export const Anchores = styled.a `
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;   

    `
export const Dropdowncontent = styled.div`   
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    &:hover {        
        background-color: red;          
        }
    `
export const Dropbtn = styled.button`
        display: block;  
        font-size: 16px;  
        border: none;
        outline: none;
        color: black;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;      
        &:hover {        
            background-color: #ddd;         
            display: block;       
            }  
     `