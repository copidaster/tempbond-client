import * as React from "react";
import * as S from "./filter-panel.styled";

import { Input, Slider, Space, Typography } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import Button from "antd/es/button/button";

const { Title } = Typography;

const categroies = [
  {
    id: 1,
    option: 'AIIMS',
  },
  {
    id: 2,
    option: 'Environment & fire',
  },
  {
    id: 3,
    option: 'Australian Institute ',
  },
  {
    id: 4,
    option: 'The Australian Journal ',
  },
  {
    id: 5,
    option: 'Basic fire home safety',
  },
];

export const FilterPanel = () => {
  return (
    <S.FilterPanel>
      <Space direction="vertical">
        <Title level={4}>Shop</Title>
        <Input placeholder="Search..." prefix={<SearchOutlined />} />
        <Space style={{ width: '100%' }} direction="vertical">
          <Title level={5}>Categories</Title>
          {categroies.map((item) => (
            <Button block type={'text'} key={item.id}>
              {item.option}
            </Button>
          ))}
        </Space>
        <Space style={{ width: '100%' }} direction="vertical">
          <Title level={5}>Price</Title>
          <Slider range defaultValue={[20, 50]} />
        </Space>
      </Space>
    </S.FilterPanel>
  );
};
