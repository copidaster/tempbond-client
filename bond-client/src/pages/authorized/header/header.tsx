import { Space } from 'antd';
import Button from 'antd/es/button';
import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HeaderLogo from '../../../assets/header-logo.svg'; // [A.Zaluha]
import Basket from '../../../assets/icons/basket.svg'; // [A.Zaluha]
import Bell from '../../../assets/icons/bell.svg'; // [A.Zaluha]
import Search from '../../../assets/icons/search.svg'; // [A.Zaluha]
import { pagesMap } from '../authorized.routes';

import * as S from './header.styled';
import { UserMenu } from './userMenu';
import { UserProfile } from './userProfile';

export const Header = () => {
  return (
    <S.Header>
      <img src={HeaderLogo} alt="Afac corp." />
      <Space>
        <TabButton link={pagesMap.homePage} text="Home" />
        <TabButton
          link={pagesMap.collaborationGroups}
          text="Collaboration groups"
        />
        <TabButton link={pagesMap.resources} text="Resources" />
        <TabButton link={pagesMap.events} text="Events" />
        <TabButton link={pagesMap.shop} text="Shop" />
      </Space>
      <Space>
        <Button
          icon={<img src={Search} alt="Search" />}
          onClick={() => console.log('search click')}
          type="text"
        />
        <Button
          icon={<img src={Basket} alt="Basket" />}
          onClick={() => console.log('basket click')}
          type="text"
        />
        <Button
          icon={<img src={Bell} alt="Bell" />}
          onClick={() => console.log('bell click')}
          type="text"
        />
        <UserMenu />
        <UserProfile />
      </Space>
    </S.Header>
  );
};

type TabButtonProps = {
  text: string;
  link: string;
};

const TabButton = (props: TabButtonProps) => {
  const location = useLocation();
  const isActive = location.pathname === props.link;

  return (
    <NavLink to={props.link}>
      <Button type={isActive ? 'primary' : 'text'}>{props.text}</Button>
    </NavLink>
  );
};
