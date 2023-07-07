import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";
const { Sider } = Layout;
const Lnb = ({ collapsed }) => {
  return (
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
            label: "검색창",
          },
          {
            key: "1",
            icon: <UserOutlined />,
            label: <Link to="/">통합대시보드</Link>,
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: <Link to="/temp/dashboard">대시보드</Link>,
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: <Link to="/temp/report-down">보고서 다운로드</Link>,
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: <Link to="/temp/monitoring/alarm">모니터링 알람</Link>,
            children: [
              {
                key: "4-1",
                label: (
                  <Link to="/temp/monitoring/alarm-setting">알람 설정</Link>
                ),
              },
              {
                key: "4-2",
                label: (
                  <Link to="/temp/monitoring/alarm-story">
                    알람 실행 스토리
                  </Link>
                ),
              },
            ],
          },
          {
            key: "5",
            icon: <UploadOutlined />,
            label: <Link to="/temp/media/upload">매체 파일 업로드</Link>,
          },
          {
            key: "6",
            icon: <UploadOutlined />,
            label: <Link to="/temp/media/export">매체 데이터 내보내기</Link>,
          },
          {
            key: "7",
            icon: <UploadOutlined />,
            label: <Link to="/temp/media/download">매체 데이터 다운로드</Link>,
          },
        ]}
      />
    </Sider>
  );
};
export default Lnb;
