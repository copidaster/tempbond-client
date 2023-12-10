import * as React from 'react';
import { Button, Popover, Row, Space } from 'antd';
import Hamburger from '../../../assets/icons/hamburger.svg'; // [A.Zaluha]

export const UserMenu = () => {
  const menuContent = () => {
    return (
      <Space direction="vertical">
        <Row>1</Row>
        <Row>2</Row>
        <Row>3</Row>
        <Row>4</Row>
      </Space>
    );
  };
  return (
    <Popover
      content={menuContent}
      trigger="click"
      placement="bottomRight"
      arrow={false}
    >
      <Button icon={<img src={Hamburger} alt="Bell" />} type="text" />
    </Popover>
  );
};
