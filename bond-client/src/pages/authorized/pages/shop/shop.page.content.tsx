import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {
  Button,
  Card,
  Col,
  Divider,
  Dropdown,
  Row,
  Space,
  Tag,
  Typography,
  message,
} from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';
import { useEffect } from 'react';
import { useShopStore } from './shop.provider';

import PrevIcon from '/src/icons/buttons/prev.svg';
import NextIcon from '/src/icons/buttons/next.svg';

import * as S from './shop.page.styled';

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

const { Meta } = Card;

export const ShopPageContent = observer(() => {
  const { productsIsLoading, loadProducts, products } = useShopStore();
  console.log(
    '🚀 ~ file: shop.page.content.tsx:53 ~ ShopPageContent ~ products:',
    products
  );

  useEffect(() => {
    loadProducts();
  }, []);

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
    current: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode
  ) => {
    if (type === 'prev') {
      return (
        <Button type="text" icon={<img src={PrevIcon} />}>
          Previous
        </Button>
      );
    }
    if (type === 'next') {
      return (
        <Button type="text">
          <Space align="center">
            Next
            <img src={NextIcon} />
          </Space>
        </Button>
      );
    }
    return originalElement;
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
      {products && (
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} span={6}>
              <Card
                cover={
                  <img
                    alt="example"
                    src={product.imgSrc}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                }
                style={{ padding: 16 }}
                bodyStyle={{ padding: '24px 0' }}
              >
                <Space direction="vertical">
                  <Meta
                    title={product.name}
                    description={`${product.price}$`}
                  />
                  <Text type="secondary">{product.description}</Text>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <Divider />
      <S.Pagination
        defaultCurrent={1}
        total={100}
        showSizeChanger={false}
        className="custom-pagination"
        responsive={true}
        itemRender={customItemRender}
      />
    </S.Content>
  );
});
