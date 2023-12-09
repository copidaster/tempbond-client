import { Divider, Space, Typography } from "antd";
import * as React from "react";
import { FilterPanel } from "./filter-panel/filter-panel";

const { Title } = Typography;

export const ShopPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <FilterPanel />
      <Divider type={"vertical"} style={{ margin: 0 }} />
      <div>
        <Title level={4}>Top picks</Title>
      </div>
    </div>
  );
};
