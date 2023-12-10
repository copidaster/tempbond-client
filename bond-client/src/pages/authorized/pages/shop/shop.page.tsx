import {
  Button,
  Divider,
  Dropdown,
  Row,
  Space,
  Typography,
  message,
} from 'antd';
import * as React from 'react';
import { FilterPanel } from './filter-panel/filter-panel';
import type { MenuProps } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const ShopPage = () => {
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Divider type={'vertical'} style={{ margin: 0 }} />
      <Row align="middle" justify="space-between">
        <Title level={4}>Top picks</Title>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Type
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Row>
    </>
  );
};
