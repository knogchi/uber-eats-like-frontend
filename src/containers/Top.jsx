import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

// components
import { LocalMallIcon } from '../components/Icons';

// images
import MainLogo from '../images/logo.png';

// constants
import { COLORS } from '../style_constants';

// styles
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 32px;
`;

const BagIconWrapper = styled.div`
  padding-top: 24px;
`;

const ColoredBagIcon = styled(LocalMallIcon)`
  color: ${COLORS.MAIN};
`;

const MainLogoImage = styled.img`
  height: 90px;
`
export const Top = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <Link to="/restaurants">
          <MainLogoImage src={MainLogo} alt="main logo" />
        </Link>
        <BagIconWrapper>
          <Link to="/orders">
            <ColoredBagIcon fontSize="large" />
          </Link>
        </BagIconWrapper>
      </HeaderWrapper>
    </Fragment>
  )
}
