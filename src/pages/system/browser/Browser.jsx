import React , { Component } from 'react';
class Browser extends Component {
    render(){
        console.log("routes3:",this.props.routes)
        return <h2>浏览器相关页</h2>;
    }
}

export default Browser