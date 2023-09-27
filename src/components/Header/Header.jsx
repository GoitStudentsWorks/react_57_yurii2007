import { HeaderStyled } from './HeaderStyled';
import { ReactComponent as ReactLogo } from '../../images/svg/logo.svg';
import { ReactComponent as ExitIconButton } from '../../images/svg/exit-icon.svg';
import { useState } from 'react';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';

export const Header = () => {
  const [isModalShow, setModalShow] = useState(false);

  return (
    <>
      <HeaderStyled>
        <ReactLogo className="logo-header" />
        <span className="logo-text">Money Guard</span>
        <p className="user-name">name</p>
        <button className="exit-button" onClick={() => setModalShow(true)}>
          <ExitIconButton className="exit-button-svg"></ExitIconButton>
        </button>
      </HeaderStyled>
      <ModalLogout active={isModalShow} setActive={() => setModalShow(false)} />
    </>
  );
};