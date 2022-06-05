import React from 'react';
import { StyledCards } from './styles/Card.styled';

const Card = ({ item: { id, title, body, image } }) => {
    return (
        <StyledCards layout={id % 2 === 0 && 'row-rewerse'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt='' />
            </div>
        </StyledCards>
    );
}

export default Card;
