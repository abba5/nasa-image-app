import React from 'react';

import { Content, LogoImg, FavLogoImg, Wrapper } from './Header.style';

import NASALogo from '../../images/nasa-logo.svg';
import FavLogo from '../../images/fav.jpeg';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={NASALogo} alt='nasa-logo' />
            <FavLogoImg src={FavLogo} alt='fav-logo' />
        </Content>
    </Wrapper>
);

export default Header;