import { Space } from "antd";
import Button from "antd/es/button";
import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { pagesMap } from "../authorized.routes";
import Logo from "./logo.svg";

import * as S from "./header.styled";

export const Header = () => {
  return (
    <S.Header>
      <img src={Logo} alt="Afac corp." />
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
      <div>right actions</div>
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
      <Button type={isActive ? "primary" : "text"}>{props.text}</Button>
    </NavLink>
  );
};
