import axios from 'axios';

//通用方法
const request = (url,params,method = "POST") => {
    return new Promise((resolve,reject)=>{
      axios(url,{
        method:method,
        headers: { 'Content-Type': 'application/json' },
        data:JSON.stringify(params)
      }).then(res => {
        if(res && res.data){
          resolve(res.data)
        }
      }).catch(err => {
          reject(err)
      })
    })
  }

export default request;
