import { Divider, Skeleton, Space, Typography } from "antd";
import { observer } from "mobx-react";
import * as React from "react";
import { useEffect } from "react";
import { FilterPanel } from "./filter-panel/filter-panel";
import { useShopStore } from "./shop.provider";

const { Title } = Typography;

export const ShopPage = observer(() => {
  const { criteriaIsLoading, loadCriteria } = useShopStore();

  useEffect(() => {
    loadCriteria();
  }, []);

  if (criteriaIsLoading) {
    return <Skeleton />;
  }

  return (
    <div style={{ display: "flex" }}>
      <FilterPanel />
      <Divider type={"vertical"} style={{ margin: 0 }} />
      <div>
        <Title level={4}>Top picks</Title>
      </div>
    </div>
  );
});
