import styled from 'styled-components';

import { CustomButtonContainer } from '../custom-button/custombutton.styles';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    .image {
        width: 100%;
        height: 95%;
        background-size: cover;
        background-position: center;
        margin-bottom: 5px;
    }

    ${CustomButtonContainer} {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;

        @media screen and (max-width: 800px) {
            display: block;
            opacity: 0.9;
            min-width: unset;
            padding: 0 10px;
        }
    }

    &:hover {
        .image {
        opacity: 0.8;
        }

        ${CustomButtonContainer} {
        opacity: 0.85;
        display: flex;
        }
    }
    @media screen and (max-width: 800px) {
        width: 40vw;

        &:hover {
            .image {
            opacity: unset;
            }
    
            ${CustomButtonContainer} {
            opacity: unset;
            }
        }
    }
  
`;

export const Footer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;
export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;
export const PriceContainer = styled.span`
width: 10%;
`;
