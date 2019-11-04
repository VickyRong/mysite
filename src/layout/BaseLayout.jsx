import React, { Component } from "react";
import './BaseLayout.css'
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    const { children } = this.props;
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
              <Link to="/blog">文章</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/system">知识体系</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/about">解决方案</Link>
            </Menu.Item>
          </Menu>
        </Header>
        {/** 内容区 */}
        <Layout>
         {/** 侧边栏 */}
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["2-3"]}
              defaultOpenKeys={["sub2"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="book" />
                    文章
                  </span>
                }
              >
                <Menu.Item key="1-1">
                  <Link to="/article/daily">好文</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="cluster" />
                    知识体系
                  </span>
                }
              >
                <Menu.Item key="2-1">
                  <Link to="/">核心语言</Link>
                </Menu.Item>
                <Menu.Item key="2-2">
                  <Link to="/system/frame">框架学习</Link>
                </Menu.Item>
                <Menu.Item key="2-3">
                  <Link to="/system/wechat">微信开发</Link>
                </Menu.Item>
                <Menu.Item key="2-4">
                  <Link to="/">前端工具</Link>
                </Menu.Item>
                <Menu.Item key="2-5">
                  <Link to="/system/browser">浏览器相关</Link>
                </Menu.Item>
                <Menu.Item key="2-6">
                  <Link to="/">NodeJs</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="code" />
                    解决方案
                  </span>
                }
              >
                <Menu.Item key="3-1">
                  <Link to="/">Css相关</Link>
                </Menu.Item>
                <Menu.Item key="3-2">
                  <Link to="/">Js相关</Link>
                </Menu.Item>
                <Menu.Item key="3-3">
                  <Link to="/">移动端相关</Link>
                </Menu.Item>
                <Menu.Item key="3-4">
                  <Link to="/">兼容性相关</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          {/** content */}
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Blog</Breadcrumb.Item>
              <Breadcrumb.Item>About</Breadcrumb.Item>
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
                { children }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
