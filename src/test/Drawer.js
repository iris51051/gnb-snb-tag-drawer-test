import React, { useState } from "react";
import { Button, Drawer, Input, Space, Layout } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "../index.css";

const { Content } = Layout;
const MyComponent = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "8px",
    right: "8px",
  };

  return (
    <div>
      <Button onClick={showDrawer}>Open Drawer</Button>
      <Input />
      <Drawer
        className="FilterDrawer"
        title="필터구성"
        open={visible}
        onClose={closeDrawer}
        mask={false} // Disable the mask layer
        maskClosable={false} // Prevent closing the drawer when clicking outside
        closeIcon={<CloseOutlined style={closeButtonStyle} />} // Apply custom style to the close button
        headerStyle={{
          paddingRight: "24px", // Add right padding to the header to accommodate the close button
        }}
        footer={
          <Space>
            <Button type="primary" onClick={closeDrawer}>
              {"적용하기"}
            </Button>
          </Space>
        }
      >
        <Content
          style={{
            margin: "1px 1px 1px 1px",
            padding: 1,
            height: 140,
            background: "white",
            justifyContent: "space-between",
            alignItems: "center",
            rounding: "round",
          }}
        >
          <p>필터구성</p>
        </Content>
      </Drawer>
    </div>
  );
};

export default MyComponent;
