import * as React from "react";
import * as S from "./filter-panel.styled";

import { Input, Slider, Space, Typography } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import Button from "antd/es/button/button";

const { Title } = Typography;

const categroies =[
  "Cars",
  "Cars",
  "Cars",
  "Cars",
]

export const FilterPanel = () => {

  return (
    <S.FilterPanel>
      <Space direction="vertical">
        <Title level={4}>Shop</Title>
        <Input placeholder="Search..." prefix={<SearchOutlined />} />
        <Space style={{width: '100%'}} direction="vertical">
          <Title level={5}>Categories</Title>
          {categroies.map(item=><Button  block type={'text'}>{item}</Button>)}
        </Space>
        <Space style={{width: '100%'}} direction="vertical">
          <Title level={5}>Price</Title>
          <Slider range/>
        </Space>
      </Space>
    </S.FilterPanel>
  );
};
