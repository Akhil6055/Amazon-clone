import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';
function Header(){
    return (
       
        <Container>
            
           <HeaderLogo>
               <Link to="/">
                  <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
               </Link>
           </HeaderLogo>
           <HeaderOptionAdress>
               <LocationOnIcon />
               <HeaderOption>
               <OptionLineOne>Hello</OptionLineOne>
               <OptionLineTwo>select your address</OptionLineTwo>
               </HeaderOption>
           </HeaderOptionAdress>
           <HeaderSearch>
               <HeaderSearchInput type="text"/>
               <HeaderSearchIconContainer>
               <SearchIcon />
               </HeaderSearchIconContainer>
           </HeaderSearch>
           <HeaderNavItems>
               <HeaderOption>
                   <OptionLineOne> Hello Akhil</OptionLineOne>
                   <OptionLineTwo> Accounts & lists</OptionLineTwo>
               </HeaderOption>
               <HeaderOption>
                   <OptionLineOne> Returns & </OptionLineOne>
                   <OptionLineTwo>  orders</OptionLineTwo>
               </HeaderOption>
               
               <HeaderOptionCart>
                   <Link to="/Cart">
                   <ShoppingBasketIcon />
                   <CartCount>1</CartCount>
                   </Link>
               </HeaderOptionCart>
               
           </HeaderNavItems>
        </Container>
    )
}


const Container = styled.div ` 
height:60px;
background-color:#0F1111;
display: flex;
align-items: center;
color: white;
justify-content: space-between;
`




const HeaderLogo = styled.div `
  img{
      width: 100px;
      margin-left: 11px;
  }


`

const HeaderOptionAdress = styled.div `
padding-left: 20px;
display:flex;
align-items:center;


`
const OptionLineOne = styled.div `



`
const OptionLineTwo = styled.div `
 font-weight: 700;

`
const HeaderSearch = styled.div ` 
display: flex;
flex-grow: 1;
height: 40px;
border-radius: 4px;
overflow: hidden;
padding-left: 10px;
:focus-within{
    box-shadow: 0 0 0 3px #F90;

}
background-color: white ;
`
const HeaderSearchInput = styled.input ` 
flex-grow: 1;
border : 0;
:focus{
    outline: none;
}


`

const HeaderSearchIconContainer = styled.div ` 
width: 45px;
background-color: #febd69;
color: black;
justify-content: center;
align-items: center;
display: flex;
`

const HeaderNavItems = styled.div ` 
display: flex;


`
const HeaderOption = styled.div ` 

padding-left:9px;
padding-right: 9px;
padding-top: 10px;
padding-bottom: 10px;
`
const HeaderOptionCart = styled.div ` 
display: flex;
a{
    align-items: center;
    padding-right: 9px;
    display: flex;
    color: white;
    text-decoration:none;

}
`
const CartCount = styled.div ` 
padding-left: 4px;
`






export default Header ;