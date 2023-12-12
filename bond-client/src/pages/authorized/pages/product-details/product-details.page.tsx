import {
  Button,
  Col,
  Image,
  InputNumber,
  Layout,
  Modal,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from 'antd';
import * as React from 'react';

import { CSSProperties, useState } from 'react';
import Back from 'src/assets/icons/buttons/prev.svg';
import { Icons } from "src/utils/icons";

const { Text, Title } = Typography;
const imgStyle = { verticalAlign: "middle" };
const sliderImg: CSSProperties = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
};

const Imgs = [
  "https://18000.com.ua/wp-content/uploads/2019/02/%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8.jpg",
  "https://koshka.top/uploads/posts/2021-12/1640160492_1-koshka-top-p-milenkie-kotiki-1.jpg",
  "https://koshka.top/uploads/posts/2021-12/1640160510_4-koshka-top-p-milenkie-kotiki-5.jpg",
  "https://koshka.top/uploads/posts/2021-12/1640160492_10-koshka-top-p-milenkie-kotiki-12.jpg",
];

export const ProductDetailsPage = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(false);
  const [mainImage, setMainImage] = useState(Imgs[0]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleDecrease = () => {
    setValue(value - 1);
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const handleImageClick = (newImage: any) => {
    setMainImage(newImage);
  };

  return (
    <Layout style={{ margin: "30px 0 120px 0 " }}>
      <Modal
        title="How would you like to purchase?"
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        open={visible}
        footer={[]}
        width={400}
      >
        <Space>
          <Text>
            Pay now by credit card or generate an invoice to be paid at a later
            time.
          </Text>
        </Space>
        <Space direction="vertical" style={{ marginTop: 20 }}>
          <Button block type="primary" onClick={() => setVisible(false)}>
            Checkout with credit card
          </Button>
          <Button block type="default" onClick={() => setVisible(false)}>
            Generate an invoice
          </Button>
        </Space>
      </Modal>
      <Row justify="center">
        <Col span={4} />
        <Col span={8}>
          <Space direction="vertical" style={{ gap: 32 }}>
            <Space direction="vertical">
              <Button type="text" icon={<img src={Back} style={imgStyle} />}>
                Browse all products
              </Button>
              <Title level={2}>
                A Review of Best Practice for Prescribed Burning
              </Title>
              <Text>
                $495{" "}
                <Text type="secondary" style={{ fontSize: 12 }}>
                  inc. GST
                </Text>
              </Text>
              <Tag style={{ padding: "5px 16px" }}>
                <Space split="*" align="center">
                  <Text style={{ verticalAlign: "middle" }}>
                    <Icons.ShopingBag alt="Document" /> Document
                  </Text>
                  <Text type="success">
                    <Icons.Success alt="In stock" /> In stock
                  </Text>
                  <Text>
                    <Icons.Truck alt="Delivery" /> Expected lead time up to 15
                    days
                  </Text>
                </Space>
              </Tag>
            </Space>
            <Space direction="vertical">
              <Text style={{ fontSize: 16 }}>
                Prescribed burning is an essential part of bushfire mitigation
                across the Australian landscape to reduce risk to communities
                and ecosystems and is the most effective approach to treating
                bushfire risk and maintaining ecosystem health across large
                areas of landscape.
              </Text>
              <Text style={{ fontSize: 16 }}>
                Australia is a global leader in the theory and practice of
                prescribed burning. This book includes contributions from more
                than 50 authors, which reflects the diversity, complexity and
                scope of bushfire knowledge.
              </Text>
            </Space>
            <Space>
              <Select
                defaultValue="Option select box"
                style={{ width: 240 }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Option select box" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              ></Select>
              <Space.Compact>
                <Button onClick={() => handleDecrease()}>-</Button>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  prefix={
                    <Text type="secondary" style={{ fontSize: 14 }}>
                      Qty.
                    </Text>
                  }
                  value={value}
                  style={{ width: "100px" }} // Задайте желаемую ширину
                />
                <Button onClick={() => handleIncrease()}>+</Button>
              </Space.Compact>
              <Button
                type="primary"
                onClick={() => {
                  setVisible(true);
                }}
              >
                Buy now
              </Button>
            </Space>
          </Space>
        </Col>
        <Col span={2} />
        <Col span={6}>
          <Image
            src={mainImage}
            alt="Main Image"
            style={{
              width: "450px",
              height: "500px",
              objectFit: "cover",
            }}
          />
          <Row gutter={16} style={{ marginTop: "16px" }}>
            <Col span={24}>
              <Space size={16}>
                {Imgs.map((img) => (
                  <Image
                    key={img}
                    src={img}
                    alt="Image 1"
                    onClick={() => handleImageClick(img)}
                    style={sliderImg}
                    preview={false}
                  />
                ))}
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={4} />
      </Row>
    </Layout>
  );
};
