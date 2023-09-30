import styled from 'styled-components';

export const size = {
  mobile: '280px',
  tablet: '768px',
  desktop: '1280px',
};
export const breakpoints = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const ContainerStyle = styled.div`
  min-width: ${size.mobile};
  margin: 0 auto;
  padding: ${({ Size }) => Size === 'main' && '32px 0'};
  position: relative;
  // height: 100%;
  @media screen and ${breakpoints.tablet} {
    padding-top: 20px;
  }

  @media screen and ${breakpoints.desktop} {
    width: ${({ Size }) => Size === 'statistics' && '800px'};
    padding: ${({ Size }) =>
      (Size === 'main' && '46px 0 0 70px') ||
      (Size === 'statistics' && '32px 0 0 54px')};
  }
`;

//
