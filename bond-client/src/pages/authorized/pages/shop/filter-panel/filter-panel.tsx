import * as React from "react";
import * as S from "./filter-panel.styled";

import { Input, Skeleton, Slider, Space, Typography } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import Button from 'antd/es/button/button';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useShopStore } from '../shop.provider';

const { Title } = Typography;

export const FilterPanel = observer(() => {
  const {
    criteriaIsLoading,
    loadCriteria,
    criteria,
    selectedCategoryId,
    setCategory,
    search,
    setSearch,
    setMin,
    setMax,
  } = useShopStore();

  useEffect(() => {
    loadCriteria();
  }, []);

  const sliderValues = [
    criteria?.min !== undefined
      ? ((criteria.min - 100) / (1000 - 100)) * 100
      : undefined,
    criteria?.max !== undefined
      ? ((criteria.max - 100) / (1000 - 100)) * 100
      : undefined,
  ];

  const handleSliderChange = (values: [number, number]) => {
    const [min, max] = values.map((value) => {
      return (value / 100) * (1000 - 100) + 100;
    });

    setMin(min);
    setMax(max);
  };

  if (criteriaIsLoading) {
    return <Skeleton />;
  }

  return (
    <S.FilterPanel>
      <Space direction="vertical">
        <Title level={4}>Shop</Title>
        <Input
          placeholder="Search..."
          value={search}
          prefix={<SearchOutlined />}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Space style={{ width: '100%' }} direction="vertical">
          <Title level={5}>Categories</Title>
          {criteria?.categories.map((item) => (
            <Button
              block
              type={selectedCategoryId === item.id ? 'primary' : 'text'}
              key={item.id}
              onClick={() => {
                setCategory(item.id);
              }}
            >
              {item.name}
            </Button>
          ))}
        </Space>
        <Space style={{ width: '100%' }} direction="vertical">
          <Title level={5}>Price</Title>
          <Slider
            range
            defaultValue={sliderValues}
            onChange={handleSliderChange}
          />
        </Space>
      </Space>
    </S.FilterPanel>
  );
});
