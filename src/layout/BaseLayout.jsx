import React, { Component } from "react";
import './BaseLayout.css'
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import routes from '../router/routerSliderNav';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      routes:routes
    };
  }

  render() {
    const { children } = this.props;
    const { routes } = this.state;
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
              <Link to="/article">文章</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/system">知识体系</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/sultion">解决方案</Link>
            </Menu.Item>
          </Menu>
        </Header>
        {/** 内容区 */}
        <Layout>
         {/** 侧边栏 */}
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1-1"]}
              defaultOpenKeys={["1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {
                routes.map((item,i)=>
                  <SubMenu 
                    key={i}
                    title = {
                      <span>
                        { item.iconName ? <Icon type={item.iconName} /> : null }
                        { item.title }
                      </span>
                    }
                  >
                    {
                      item.children.map((list,index) =>
                        <Menu.Item key={`${i}-${index}`}>
                          <Link to={ list.path }>{ list.title }</Link>
                        </Menu.Item>
                      )
                    }
                  </SubMenu>
                )
              }
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
