import React from "react";
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";

import "./index.css";

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
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
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ height: "100vh" }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "0",
                  icon: <UserOutlined />,
                  label: <Link to="/">통합대시보드</Link>,
                },
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: <Link to="/">통합대시보드</Link>,
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: <Link to="/">대시보드</Link>,
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: <Link to="/">보고서 다운로드</Link>,
                },
                {
                  key: "4",
                  icon: <UploadOutlined />,
                  label: <Link to="/">모니터링 알람</Link>,
                  children: [
                    {
                      key: "4-1",
                      label: <Link to="/">알람 설정</Link>,
                    },
                    {
                      key: "4-2",
                      label: <Link to="/">알람 실행 스토리</Link>,
                    },
                  ],
                },
                {
                  key: "5",
                  icon: <UploadOutlined />,
                  label: <Link to="/">매체 파일 업로드</Link>,
                },
                {
                  key: "6",
                  icon: <UploadOutlined />,
                  label: <Link to="/">매체 데이터 내보내기</Link>,
                },
                {
                  key: "7",
                  icon: <UploadOutlined />,
                  label: <Link to="/">매체 데이터 다운로드</Link>,
                },
              ]}
            />
          </Sider>
          <Layout>
            <Content
              style={{
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div></div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
