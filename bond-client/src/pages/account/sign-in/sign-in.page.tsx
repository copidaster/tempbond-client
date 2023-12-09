import { Form, Input, Space, Typography } from "antd";
import Button from "antd/es/button";
import * as React from "react";

import { MailOutlined, SecurityScanOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title, Text, Link } = Typography;

const FormStyled = styled(Form)`
  .ant-form-item-label {
    padding: 0;

    label {
      height: 30px;
    }
  }
`;

export const SignInPage = () => {
  return (
    <Space
      style={{ marginTop: 20 }}
      align="center"
      size={"middle"}
      direction="vertical"
    >
      <Title level={4}>Login into your AFAC portal</Title>
      <FormStyled
        name="basic"
        title="Login "
        initialValues={{ remember: true }}
        onFinish={() => {}}
        onFinishFailed={() => {}}
        autoComplete="off"
        requiredMark={false}
        colon={false}
        validateTrigger={"onSubmit"}
        size={"middle"}
        layout={"vertical"}
      >
        <Form.Item
          label="Email address"
          name="email"
          rules={[
            { required: true, message: "Please enter an Emaill address" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Type email" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter a password!" }]}
        >
          <Input.Password placeholder="Type password" size="large" />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button size={"middle"} type={"link"}>
            Forgot password?
          </Button>
        </div>
        <Form.Item>
          <Button size={"large"} block type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
        <Text type="secondary">
          Don't have an account? Go back <Link>afac.com.au</Link>
        </Text>
      </FormStyled>
    </Space>
  );
};
