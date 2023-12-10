import { observer } from "mobx-react";
import * as React from "react";
import { useEffect } from "react";
import { FilterPanel } from "./filter-panel/filter-panel";
import { useShopStore } from "./shop.provider";
import {
  Button,
  Divider,
  Dropdown,
  Row,
  Space,
  Tag,
  Typography,
  message,
} from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const tags = [
  {
    id: 1,
    label: 'Learning and Development',
  },
  {
    id: 2,
    label: 'Warnings',
  },
  {
    id: 3,
    label: 'Rural and Land Management',
  },
  {
    id: 4,
    label: 'Collaborative Procurement Business Strategy',
  },
  {
    id: 5,
    label: 'Climate Change',
  },
  {
    id: 6,
    label: 'Safety',
  },
];

export const ShopPage = () => {
  const timeAddedItems: MenuProps['items'] = [
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
  ];
  const typeItems: MenuProps['items'] = [
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

  const typeMenu = {
    items: typeItems,
    onClick: handleMenuClick,
  };

  const timeAddedMenu = {
    items: timeAddedItems,
    onClick: handleMenuClick,
  };

  const tagItems: MenuProps['items'] = tags.map((tag) => {
    return {
      key: tag.id,
      label: tag.label,
    };
  });

  return (
    <>
      <Row align="middle" justify="space-between">
        <Title level={4}>Top picks</Title>
        <Space>
          <Dropdown menu={timeAddedMenu}>
            <Button>
              <Space>
                Type
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown menu={typeMenu}>
            <Button>
              <Space>
                Latest
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </Row>
      <Row align="middle" justify="space-between">
        <Space>
          {tags.map((tag) => (
            <Tag key={tag.id}>{tag.label}</Tag>
          ))}
        </Space>
        <Dropdown menu={{ items: tagItems }}>
          <Text type="secondary" onClick={(e) => e.preventDefault()}>
            <Space>
              Show all
              <DownOutlined />
            </Space>
          </Text>
        </Dropdown>
      </Row>
    </>
  );
};
