import React, { Component } from "react";
import './Home.css'
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import RouterMap from "../../router/routerMap"
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends Component {
  render() {
    return (
      <Layout>
        {/** 顶部 */}
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Header>
        {/** 内容区 */}
        <Layout>
         {/** 侧边栏 */}
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["2"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to="/blog">Blog</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/about">About</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          {/** content */}
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {/** 核心路由页面 */}
                <RouterMap/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
