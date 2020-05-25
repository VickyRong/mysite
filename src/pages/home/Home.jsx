import React, { Component } from "react";
import { Button, Table, Tag, Popconfirm,message,Modal,Input } from 'antd';
import { queryUser,addUser,updateUser,deleteUser,queryBlog,deleteBlog } from '../../service/api'
import simpleRequest  from '../../utils/request'
import _ from 'lodash';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
        userList : [], //用户信息
        blogList : [], //文章信息
        visible:false, //弹窗显示 
        updateUserInfo:{}
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

  //编辑用户
  updateUser = (record) =>{
    if(record){
      this.showModal()
      this.setState({
        updateUserInfo:record,
      })
    }
  }

  //修改用户
  toUpdateUser = () =>{
    let { updateUserInfo } = this.state
    var params = {
      ...updateUserInfo
    };
    simpleRequest(updateUser,params)
    .then(res=>{
      if(res){
        message.success('修改成功！');
        this.queryUser();
      }
    })
  }
  
  //修改输入框
  onInputChange = (e) =>{
    let { updateUserInfo } = this.state
    let obj = _.cloneDeep(updateUserInfo);
    let key = e.target.name;
    let value = e.target.value;
    obj[key] = value;
    this.setState({ updateUserInfo:obj })
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

  //确认弹窗
  handleOk = e =>{
    this.toUpdateUser();
    this.hideModal()
  }

  //取消弹窗 
  handleCancel = e => {
    this.hideModal()
  };

  //打开弹窗
  showModal = () => {
    this.setState({  visible: true });
  };

  //关闭弹窗
  hideModal = () => {
    this.setState({  visible: false });
  };
  

  render() {
    let { userList,blogList,visible,updateUserInfo } = this.state;
    //表头信息
    const userColumns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <span>{text}</span>,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
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
            <a onClick={() => this.updateUser(record)} > 编辑 </a>
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
          <>
            <Popconfirm title="确定删除?" onConfirm={() => this.deleteBlog(record._id)}>
              <a> 删除 </a>
            </Popconfirm>
            <a onClick={() => this.updateUser(record)} > 编辑 </a>
          </>
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
        {/* <div className="g-mb-20">
          <Tag color="#ff5722" className="g-mb-20">文章列表</Tag>
          <Table columns={blogColumns} dataSource={blogList} rowKey="_id" />
        </div> */}
        {/** 弹窗内容 */}
        <Modal
          title="修改信息"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         姓名： <Input value={ updateUserInfo.name } name="name" onChange={ this.onInputChange } />
         性别： <Input value={ updateUserInfo.sex } name="sex" onChange={ this.onInputChange } />
        </Modal>
      </>
    );
  }
}

export default Home;
