import React, { Component } from "react";
import "./BaseLayout.css";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import routes from "../router/routerSliderNav";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      routes: routes
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo">
            <img alt="logo" width="42" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {this.state.routes.map((item, i) =>
              !item.children ? (
                //无二级目录
                <Menu.Item key={i}>
                  {item.iconName ? <Icon type={item.iconName} /> : null}
                  <span>{item.title}</span>
                  <Link to={item.path}> </Link>
                </Menu.Item>
              ) : (
                //有二级目录
                <SubMenu
                  key={i}
                  title={
                    <span>
                      {item.iconName ? <Icon type={item.iconName} /> : null}
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {item.children.map((list, index) => (
                    <Menu.Item key={`${i}-${index}`}>
                      <Link to={list.path}>{list.title}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              )
            )}
          </Menu>
        </Sider>
        {/**右侧内容 */}
        <Layout style={{marginLeft:200}}>
          <Header
            style={{ position:'fixed',left:200,right:0, background:'#fff', textAlign: "center", }}
          >
            Header
          </Header>
          <Content style={{ marginTop: 64 }}>
            <div style={{ padding: 24,margin:24, background: "#fff" , minHeight: 500}}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2019 Created by Vicky
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
