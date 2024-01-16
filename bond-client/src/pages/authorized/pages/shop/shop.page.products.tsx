import { Card, Col, Row, Skeleton, Space, Typography } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';
import { useShopStore } from './shop.provider';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const { Meta } = Card;

export const Products = observer(() => {
  const { productsIsLoading, loadProducts, products } = useShopStore();
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  if (productsIsLoading) {
    return <Skeleton />;
  }

  return (
    <Row gutter={[16, 16]}>
      {products?.map((product) => (
        <Col key={product.id} span={6}>
          <Card
            hoverable={true}
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
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <Space direction="vertical">
              <Meta title={product.name} description={`${product.price}$`} />
              <Text type="secondary">{product.description}</Text>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );
});
