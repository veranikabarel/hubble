import React from 'react';
import { StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Nav } from './styles/Header.styled';
import { Logo } from './styles/Header.styled';
import { Button } from './styles/Button.styled';

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='logo' />
                    <Button>Try it free!</Button>
                </Nav>
            </Container>
        </StyledHeader>
    );
}

export default Header;
