import React from 'react';

import { Container, Link } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  selected: string;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  selected,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/" selected={selected === 'dashboard'}>
          Listagem
        </Link>
        <Link to="/import" selected={selected === 'import'}>
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
