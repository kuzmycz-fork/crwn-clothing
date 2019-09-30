import React from "react";

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from "../custom-button/custom-button.component";

import { CollectionItemContainer, Footer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
    <CollectionItemContainer>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>

        <Footer>
            <NameContainer>{ name }</NameContainer>
            <PriceContainer>{ price }</PriceContainer>
        </Footer>
        <CustomButton onClick={() => addItem(item)} inverted >Add to cart</CustomButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);