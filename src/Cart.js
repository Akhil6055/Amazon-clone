import React from 'react';
import styled from 'styled-components'
import StarRateIcon from '@material-ui/icons/StarRate';

const Cart = () => {
    return (
        <Container>
            <span>
            Pay faster for all your shopping needs with Amazon Pay balance.<br />
            Buy now and get upto 10% instant discount with any credit cards
            </span>
            <Title>
                 Ipad  Air 
            </Title>
            <Price>
                 $ 1893
            </Price>
            <Rating>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
            </Rating>
            <Image src="https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_UL480_FMwebp_QL65_.jpg" />
            <ActionSection>
              <AddToCartButton>
                Proceed to buy
              </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Cart

const Container = styled.div ` 
background-color: whitesmoke;
z-index:100;
flex:1;
padding: 20px;
margin: 10px;
max-height: 300px;
height: fit-content;

flex-direction: column;

`
const Title = styled.span ` 
font-style: normal!important;
font-weight: 500;
padding-left: 6px;
`
const Price = styled.span ` 
font-weight: 500;
margin-top: 3px;
font-style: normal!important;
padding-left: 4px;
`
const Rating = styled.div ` 

`
const Image = styled.img ` 
max-height: 200px;
object-fit: contain;


`
const AddToCartButton = styled.button ` 
background-color: #f0c14b;
width: 100px;
padding-top:5px;
border: 2px;
display: flex;
:hover{
    background-color: wheat;
}
:focus-within{
    box-shadow: 0 0 0 3px #F90;

}
font-weight: 500;

`
const ActionSection = styled.div ` 
display: flex;

margin-top: 12px;
`
