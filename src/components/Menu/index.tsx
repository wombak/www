import React from 'react';
import styled from 'styled-components';
import { OfficeLocation } from './OfficeLocation';
import { ContactDetails } from '../ContactDetails';
import { Text } from '../Text';
import { color } from '../../theme';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 220px;
  text-align: right;
  padding-right: 120px;
  background-color: ${color.dark};
  color: ${color.light};
  padding-bottom: 50px;
`;

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const MenuLink = styled.a`
  cursor: pointer;
  margin-bottom: 25px;
`;

const OfficeMap = styled(OfficeLocation)`
  margin-top: 50px;
  height: 234px;
  width: 430px;
  align-self: flex-end;

  .leaflet-control-attribution {
    display: none;
  }
`;

export const Menu: React.FC = () => (
  <MenuWrapper>
    <MenuLinks>
      <MenuLink>
        <Text size="xl">About</Text>
      </MenuLink>
      <MenuLink>
        <Text size="xl">Showcase</Text>
      </MenuLink>
    </MenuLinks>
    <ContactDetails />
    <OfficeMap />
  </MenuWrapper>
);
