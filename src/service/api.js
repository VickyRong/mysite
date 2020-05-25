let baseUrI = 'http://127.0.0.1:8082';


module.exports = {
    queryUser:`${baseUrI}/queryUser`,     //查询数据
    addUser:`${baseUrI}/addUser`,         //新增用户
    updateUser:`${baseUrI}/updateUser`,   //编辑用户
    deleteUser:`${baseUrI}/deleteUser`,   //删除用户
    queryBlog:`${baseUrI}/queryBlog`,     //查询文章
    deleteBlog:`${baseUrI}/deleteBlog`,   //删除文章
}

