import { Button, Menu, Popover, Space, Typography } from 'antd';
import * as React from 'react';
import ColoborationsGroup from '../../../assets/icons/ProfilePopover/coloborationsGroup.svg'; // [A.Zaluha]
import Case from '../../../assets/icons/case.svg';
import Hamburger from '../../../assets/icons/hamburger.svg'; // [A.Zaluha]
import Organizations from '../../../assets/icons/organisations.svg'; // [A.Zaluha]
import Redirect from '../../../assets/icons/redirect.svg'; // [A.Zaluha]

const { Text } = Typography;

export const UserMenu = () => {
  const menuContent = () => {
    const itemStyle = { height: '100%', display: 'flex' };
    const imgStyle = { verticalAlign: 'middle' };
    const menuItems = [
      {
        key: 1,
        label: (
          <Space direction="vertical" style={{ gap: 0, lineHeight: 0 }}>
            <Text>Website</Text>
            <Text type="secondary">Go back to afac.com.au</Text>
          </Space>
        ),
        icon: <img src={Redirect} alt="Website" style={imgStyle} />,
        style: itemStyle,
      },
      {
        key: 2,
        label: (
          <Space direction="vertical" style={{ gap: 0, lineHeight: 0 }}>
            <Text>Members</Text>
            <Text type="secondary">Search for members you may know </Text>
          </Space>
        ),
        icon: <img src={ColoborationsGroup} alt="Members" style={imgStyle} />,
        style: itemStyle,
      },
      {
        key: 3,
        label: (
          <Space direction="vertical" style={{ gap: 0, lineHeight: 0 }}>
            <Text>Organisations</Text>
            <Text type="secondary">
              Search for other organisations or chapters
            </Text>
          </Space>
        ),
        icon: <img src={Organizations} alt="Organisations" style={imgStyle} />,
        style: itemStyle,
      },
      {
        key: 4,
        label: (
          <Space direction="vertical" style={{ gap: 0, lineHeight: 0 }}>
            <Text>Careers</Text>
            <Text type="secondary">
              Search job listings posted in your network
            </Text>
          </Space>
        ),
        icon: <img src={Case} alt="Careers" style={imgStyle} />,
        style: itemStyle,
      },
    ];
    return <Menu items={menuItems} style={{ borderInlineEnd: 0 }} />;
  };

  return (
    <Popover
      content={menuContent}
      trigger="click"
      placement="bottomRight"
      arrow={false}
    >
      <Button icon={<img src={Hamburger} alt="Bell" />} type="text" />
    </Popover>
  );
};
