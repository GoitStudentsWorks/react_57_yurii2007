import { breakpoints } from 'components/Container/Container.styled';
import styled from 'styled-components';

export const LayOutBox = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(bg-img/MobileBg.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  @media ${breakpoints.tablet} {
    background-image: url(bg-img/TabletBg.jpg);
  }

  @media ${breakpoints.desktop} {
    background-image: url(bg-img/DesctopBg.jpg);
  }
`;