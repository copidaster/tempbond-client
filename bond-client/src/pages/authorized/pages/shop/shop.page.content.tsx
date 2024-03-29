import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
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
import * as React from 'react';

import { Products } from './products';
import * as S from './shop.page.styled';
import { observer } from 'mobx-react';
import { useShopStore } from './shop.provider';
import { Icons } from '../../../../utils/icons';

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

export const ShopPageContent = observer(() => {
  const { setPage } = useShopStore();
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

  const customItemRender = (
    _current: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode
  ) => {
    if (type === "prev") {
      return (
        <Button type="text" icon={<Icons.PrevIcon alt="PrevIcon" />}>
          Previous
        </Button>
      );
    }
    if (type === "next") {
      return (
        <Button type="text">
          <Space align="center">
            Next
            <Icons.NextIcon alt="PrevIcon" />
          </Space>
        </Button>
      );
    }
    return originalElement;
  };

  const handlePagination = (page: number, _pageSize: number) => {
    setPage(page);
  };

  return (
    <S.Content>
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
      <Divider />
      <Products />
      <Divider />
      <S.Pagination
        defaultCurrent={1}
        defaultPageSize={10}
        hideOnSinglePage={true}
        onChange={handlePagination}
        total={100}
        showSizeChanger={false}
        responsive={true}
        itemRender={customItemRender}
      />
    </S.Content>
  );
});
