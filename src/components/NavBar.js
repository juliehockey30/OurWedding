import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Background = styled.img`
    height: auto;
    max-width: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
`;

const Header = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

    color: #34494c;
    font-family: 'Great Vibes', cursive;
    font-size: 3.75rem;
    font-weight: normal;
    margin: 9.25rem 0 0.5rem 0;

    @media(max-width: 768px) {
        margin-top: 7.5rem;
    }
`;

const Date = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@600&display=swap');

    color: #34494c;
    font-family: 'Poppins';
    font-size: 1.25rem;
    letter-spacing: 4px;
    margin: 0 0 2.5rem 0;
`;

const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 1rem;
    justify-content: center;
    height: 6rem;
    margin-bottom: 3rem;
    max-width: 33rem;

    @media(max-width: 768px) {
        font-size: 0.75rem;
        margin-bottom: 2rem;
    }
`;

const NavItem = styled(Link)`
    border-bottom: ${props => props.selected ? '1px solid #34494c' : 'unset'};
    color: #34494c;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    height: fit-content;
    margin: 0 1rem;
    padding: 1rem 0 0.25rem 0;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid #34494c;
    }
`;

const NavBar = () => {
    const [selectedItem, setSelectedItem] = useState(window.location.pathname)
    return (
        <Wrapper>
            <Background src="https://media-api.xogrp.com/images/a13323d4-ca25-411f-9fea-d125b69abe06~rt_auto-rs_1024.h?ordering=explicit" />
            <Header>Julie & Bryan</Header>
            <Date>9.10.2022 • WARREN, VT</Date>
            <NavBarWrapper>
                <NavItem
                    to='/'
                    selected={selectedItem === '/'}
                    onClick={() => setSelectedItem('/')}
                >HOME</NavItem>
                <NavItem
                    to='/our-story'
                    selected={selectedItem === '/our-story'}
                    onClick={() => setSelectedItem('/our-story')}
                >OUR STORY</NavItem>
                <NavItem
                    to='/details'
                    selected={selectedItem === '/details'}
                    onClick={() => setSelectedItem('/details')}
                >EVENT DETAILS</NavItem>
                <NavItem
                    to='/wedding-party'
                    selected={selectedItem === '/wedding-party'}
                    onClick={() => setSelectedItem('/wedding-party')}
                >WEDDING PARTY</NavItem>
                <NavItem
                    to='/registry'
                    selected={selectedItem === '/registry'}
                    onClick={() => setSelectedItem('/registry')}
                >REGISTRY</NavItem>
                <NavItem
                    to='/accommodations'
                    selected={selectedItem === '/accommodations'}
                    onClick={() => setSelectedItem('/accommodations')}
                >ACCOMMODATIONS</NavItem>
            </NavBarWrapper>
        </Wrapper>
    );
  }
  
  export default NavBar;
  