import React, { useState } from "react";
import {
  Button,
  Drawer,
  Input,
  Space,
  Layout,
  Select,
  Divider,
  Typography,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { FiTrash } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import dayjs from "dayjs";

import "../index.css";
const { Text, Title } = Typography;
const { Content } = Layout;
const currentDate = dayjs();
const includeOps = [
  {
    value: "1",
    label: "포함",
  },
];
const sessionOps = [
  {
    value: "1",
    label: "첫 번째 세션",
  },
  {
    value: "2",
    label: "두 번째 세션",
  },
  {
    value: "3",
    label: "세 번째 세션",
  },
];
const dateOps = [];
for (let i = 0; i < 30; i++) {
  var day = currentDate.subtract(i, "day");
  dateOps.push({
    value: i,
    label: day.format("YYYYMMDD"),
  });
}
const MyComponent = () => {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({
    include: "포함",
    session: "첫 번째 세션",
    date: currentDate.format("YYYYMMDD"),
  });

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
  const deleteFilter = () => {
    setFilter = {
      include: "포함",
      session: "첫 번째 세션",
      date: currentDate.format("YYYYMMDD"),
    };
  };
  const FilterSet = (mode, value) => {
    if (mode === "include") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        include: includeOps[value - 1].label,
      }));
    } else if (mode === "session") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        session: sessionOps[value - 1].label,
      }));
    } else if (mode === "date") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        date: dateOps[value].label,
      }));
    }
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
          height: "30px",
        }}
      >
        <div>
          <Content
            style={{
              margin: "-17px -10px -20px",
              paddingBottom: "10px",
              height: "auto",
              background: "white",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "8px 8px 8px 8px", // 모서리를 둥글게.
              border: "1px solid #ccc",
            }}
          >
            <div
              style={{
                margin: "5px 10px 10px",
              }}
            >
              <Text
                style={{
                  fontSize: "10px",
                }}
                type="secondary"
              >
                조건(최대 5개 설정)
              </Text>
            </div>
            <Divider style={{ marginTop: "-5px" }}></Divider>
            <div
              style={{
                marginTop: -15,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* 포함 여부 셀렉트 */}
              <Space wrap>
                <Select
                  size="small"
                  defaultValue="포함"
                  onChange={(value) => FilterSet("include", value)}
                  style={{
                    width: 70,
                  }}
                  bordered={false}
                  options={includeOps}
                />
              </Space>
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: -200,
                }}
              >
                {" "}
                측정기준{" "}
              </Text>
              <FiTrash
                style={{ marginRight: 10, marginTop: 10 }}
                onClick={deleteFilter}
              />
            </div>
            <div>
              {/* 세션 셀렉트 */}
              <Space wrap>
                <Select
                  defaultValue="첫 번째 세션 날짜"
                  size="small"
                  style={{
                    marginLeft: 10,
                    paddingTop: 5,
                    width: 200,
                  }}
                  onChange={(value) => FilterSet("session", value)}
                  options={sessionOps}
                />
              </Space>
            </div>
            <div
              style={{
                marginLeft: 11,
                marginTop: 10,
              }}
            >
              <Text style={{}}>측정 기준 값</Text>
            </div>
            <div>
              <Space wrap>
                <Select
                  defaultValue="20230623"
                  size="small"
                  style={{
                    marginLeft: 10,
                    paddingTop: 5,
                    width: 200,
                  }}
                  onChange={(value) => FilterSet("date", value)}
                  options={dateOps}
                />
              </Space>
            </div>
          </Content>
          <div
            style={{
              marginTop: 20,
              paddingTop: 10,
            }}
          >
            <Text>요약</Text>
            <div>
              <Input
                placeholder="Basic usage"
                value={`${filter.include} ${filter.session} = ${filter.date}`}
                readOnly
              />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MyComponent;
