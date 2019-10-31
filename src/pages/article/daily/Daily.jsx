import React , { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import dailyMd from './daily.md';
import CodeBlock from "./CodeBlock";


class Daily extends Component {
    constructor(props){
        super(props)
        this.state = {
            article : null
        }
    }

    componentWillMount(){
        this.setState({ article : dailyMd})
    }

    render(){
        return (
            <ReactMarkdown 
                source={ this.state.article } 
                renderers={{ 
                    code: CodeBlock,
                }}
            />
        )
    }
}

export default Daily