import { Layout } from 'antd';
import * as React from 'react';
import { FilterPanel } from './filter-panel/filter-panel';

import * as S from "src/pages/authorized/authorized.layout.styled";
import { ShopPageContent } from './shop.page.content';

const { Sider } = Layout;

export const ShopPage = () => {
  return (
    <Layout>
      <Sider
        width={336}
        style={{
          padding: 36,
          borderRight: '1px solid rgba(234, 236, 240, 1)',
        }}
      >
        <FilterPanel />
      </Sider>
      <S.Main>
        <ShopPageContent />
      </S.Main>
    </Layout>
  );
};
