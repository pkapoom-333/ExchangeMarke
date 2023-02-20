import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import Router from "./routers";
const { Header, Content, Sider } = Layout;

export default function App() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const menu = [
    {
      key: "68e3f834-ad4f-4009-98ca-809847348395",
      label: "BTC/THB",
      value: "btc",
    },
    {
      key: "344cfe8b-313c-4b47-b23e-0400bc30c0c1",
      label: "BUSD/THB",
      value: "busd",
    },
    {
      key: "6123235b-13a8-46d6-9e50-ef7c38657b1f",
      label: "USDT/THB",
      value: "usdt",
    },
  ];

  const handleClickMenu = (value) => {
    switch (value.key) {
      case "68e3f834-ad4f-4009-98ca-809847348395":
        navigate("/market/BTC_THB");
        break;
      case "344cfe8b-313c-4b47-b23e-0400bc30c0c1":
        navigate("/market/BUSD_THB");
        break;
      case "6123235b-13a8-46d6-9e50-ef7c38657b1f":
        navigate("/market/USDT_THB");
        break;
      default:
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="header"></Header>
      <Layout>
        <Sider
          collapsible={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["68e3f834-ad4f-4009-98ca-809847348395"]}
            mode="inline"
            items={menu}
            onClick={handleClickMenu}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              height: "100%",
              background: "#fff",
              borderRight: 12,
            }}
          >
            <Router />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
