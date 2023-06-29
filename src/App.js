import React from "react";
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import Drawer from "./test/DrawerV3.js";
import FilterTagAdder from "./test/tag.js";
import "./index.css";

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //filterTag 추가
  const [selectedValue, setSelectedValue] = useState([]);
  const [updateValue, setUpdateValue] = useState([]);
  const [DrawerVisible, setDrawerVisible] = useState(false);
  const tagChange = (data) => {
    if (Object.keys(data).length !== 0) {
      setSelectedValue(data);
    } else {
      setSelectedValue(data);
    }
  };
  const handleTagClick = (isVisible) => {
    setDrawerVisible(isVisible);
  };
  const handleDrawerClose = (isVisible) => {
    setDrawerVisible(isVisible);
  };
  const handleTagListChange = (updatedValue) => {
    setUpdateValue(updatedValue);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FilterTagAdder
              selectedValue={selectedValue}
              onValueChange={handleTagListChange}
              onTagClick={handleTagClick}
            />
            <Drawer
              onValueChange={tagChange}
              DrawerVisible={DrawerVisible}
              onCloseDrawer={handleDrawerClose}
              updateValue={updateValue}
            />
            <div></div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
