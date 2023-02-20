import React, { useState } from "react";
import { Space, Layout, Button, Menu } from "antd";
import Router from "./routers";
const { Header, Content, Sider } = Layout;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const menu = [
    { key: "68e3f834-ad4f-4009-98ca-809847348395", label: "BTC/THB" },
    { key: "344cfe8b-313c-4b47-b23e-0400bc30c0c1", label: "BUSD/THB" },
    { key: "6123235b-13a8-46d6-9e50-ef7c38657b1f", label: "USDT/THB" },
  ];

  return (
    <Layout>
      <Header className="header"></Header>
      <Layout>
        <Sider collapsible onCollapse={(value) => setCollapsed(value)}>
          <Menu
            theme="dark"
            defaultSelectedKeys={["68e3f834-ad4f-4009-98ca-809847348395"]}
            mode="inline"
            items={menu}
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
