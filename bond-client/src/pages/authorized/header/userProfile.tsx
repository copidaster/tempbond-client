import * as React from 'react';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Popover,
  Row,
  Space,
  Typography,
} from 'antd';

import Profile from '../../../assets/icons/ProfilePopover/profile.svg'; // [A.Zaluha]
import Settings from '../../../assets/icons/ProfilePopover/settings.svg'; // [A.Zaluha]
import LogOut from '../../../assets/icons/ProfilePopover/logOut.svg'; // [A.Zaluha]
import ColoborationsGroup from '../../../assets/icons/ProfilePopover/coloborationsGroup.svg'; // [A.Zaluha]
import ManagedGroups from '../../../assets/icons/ProfilePopover/managedGroups.svg'; // [A.Zaluha]

const { Text } = Typography;

export const UserProfile = () => {
  const avatarContent = () => (
    <Space direction="vertical">
      <Row>
        <Space>
          <Badge
            dot
            status="success"
            offset={[-5, 40]}
            style={{ width: 10, minWidth: 10, height: 10 }}
          >
            <Avatar
              size={48}
              icon={
                <img
                  src="https://cdn.vox-cdn.com/thumbor/YlU6hUr2mMC1UQFJRxX2wbsoZF4=/0x0:1100x580/920x613/filters:focal(520x151:696x327):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png"
                  alt="Avatar"
                />
              }
            />
          </Badge>
          <Space direction="vertical" style={{ gap: 0 }}>
            <Text strong>Olivia Rhye</Text>
            <Text type="secondary">CFO & Victorian Chapter Lead</Text>
          </Space>
        </Space>
      </Row>
      <Divider style={{ margin: '8px 0' }} />
      <Space direction="vertical">
        <Button
          icon={
            <img
              src={Profile}
              alt="Profile"
              style={{ verticalAlign: 'middle' }}
            />
          }
          block
          type="text"
        >
          View profile
        </Button>
        <Button
          icon={
            <img
              src={Settings}
              alt="Settings"
              style={{ verticalAlign: 'middle' }}
            />
          }
          type="text"
        >
          Settings
        </Button>
      </Space>
      <Divider style={{ margin: '8px 0' }} />
      <Space direction="vertical">
        <Button
          icon={
            <img
              src={ColoborationsGroup}
              alt="Groups"
              style={{ verticalAlign: 'middle' }}
            />
          }
          type="text"
        >
          Your collaboration groups
        </Button>
        <Button
          icon={
            <img
              src={ManagedGroups}
              alt="Groups"
              style={{ verticalAlign: 'middle' }}
            />
          }
          type="text"
        >
          Collaboration groups you manage
        </Button>
      </Space>
      <Divider style={{ margin: '8px 0' }} />
      <Button
        icon={
          <img src={LogOut} alt="Log out" style={{ verticalAlign: 'middle' }} />
        }
        type="text"
      >
        Log out
      </Button>
    </Space>
  );
  return (
    <Popover
      content={avatarContent}
      trigger="click"
      placement="bottomRight"
      arrow={false}
    >
      <Avatar
        size={40}
        icon={
          <img
            src="https://cdn.vox-cdn.com/thumbor/YlU6hUr2mMC1UQFJRxX2wbsoZF4=/0x0:1100x580/920x613/filters:focal(520x151:696x327):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png"
            alt="Avatar"
          />
        }
      />
    </Popover>
  );
};
