import React from 'react'
import styled from 'styled-components'
import StarRateIcon from '@material-ui/icons/StarRate';

function Product() {
    return (
        <Container>
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
                Add to cart
              </AddToCartButton>
            </ActionSection>
        </Container>
       
    )
}

export default Product


const Container = styled.div ` 
background-color: white;
z-index:100;
flex:1;
padding: 20px;
margin: 10px;
max-height: 300px;
display: flex;
flex-direction: column;

`
const Title = styled.span ` 
font-style: normal!important;
font-weight: 400;
`
const Price = styled.span ` 
font-weight: 500;
margin-top: 3px;
font-style: normal!important;
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
align-items: center;
justify-content: center;
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
align-items: center;
justify-content: center;
margin-top: 12px;
`
