import React, { Component } from "react";
import { Button, Table, Tag , Popconfirm,message } from 'antd';
import { queryUser,addUser,deleteUser,queryBlog,deleteBlog } from '../../service/api'
import simpleRequest  from '../../utils/request'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
        userList : [], //用户信息
        blogList : [], //文章信息
    }
  }

  componentDidMount() {
      this.queryUser();
      this.queryBlog();
  }

  //新增用户
  addUser = () => {
      var params = {
        name:'vicky',
        sex:'女'
      };
      simpleRequest(addUser,params)
      .then(res=>{
        if(res){
          message.success('新增成功！');
          this.queryUser();
        }
    })
  }

  //查询用户
  queryUser = () =>{
    var params = {};
    simpleRequest(queryUser,params)
    .then(res=>{
      if(res){
        this.setState({ userList:res.res })
      }
    })
  }

  //删除用户
  deleteUser = (id) =>{
    var params = {
      id:id
    };
    simpleRequest(deleteUser,params)
    .then(res=>{
      if(res){
        message.success('删除成功！');
        this.queryUser();
      }
    })
  }

  //查询文章
  queryBlog = () =>{
    var params = {};
    simpleRequest(queryBlog,params)
    .then(res=>{
      if(res){
        this.setState({ blogList:res.res })
      }
    })
  }
  //删除文章
  deleteBlog = (id) =>{
    var params = {
      id:id
    };
    simpleRequest(deleteBlog,params)
    .then(res=>{
      if(res){
        message.success('删除成功！');
        this.queryBlog();
      }
    })
  }
  

  render() {
    let { userList,blogList } = this.state;
    //表头信息
    const userColumns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <span>{text}</span>,
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <>
            <Popconfirm title="确定删除?" onConfirm={() => this.deleteUser(record._id)}>
              <a> 删除 </a>
            </Popconfirm>
          </>
        ),
      },
    ];
    const blogColumns = [
      {
        title: '文章名',
        dataIndex: 'name',
        key: 'name',
        render: text => <span>{text}</span>,
      },
      {
        title: '星期',
        dataIndex: 'weeks',
        key: 'weeks',
        render: text => <span>{text}</span>,
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <Popconfirm title="确定删除?" onConfirm={() => this.deleteBlog(record._id)}>
            <a> 删除 </a>
          </Popconfirm>
        ),
      },
    ];

    return (
      <>
        {/** 操作区域 */}
        <div className="g-mb-20">
          <Button className="g-mr-10" type="primary" onClick={this.addUser}>新增用户</Button>
        </div>
        {/** 显示区域 */}
        <div className="g-mb-20">
          <Tag color="#ff5722" className="g-mb-20">用户信息表</Tag>
          <Table columns={userColumns} dataSource={userList} rowKey="_id" />
        </div>
        <div className="g-mb-20">
          <Tag color="#ff5722" className="g-mb-20">文章列表</Tag>
          <Table columns={blogColumns} dataSource={blogList} rowKey="_id" />
        </div>
      </>
    );
  }
}

export default Home;
