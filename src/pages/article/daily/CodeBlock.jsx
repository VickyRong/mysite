import React , { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { jsx, javascript } from "react-syntax-highlighter/dist/esm/languages/prism";


class CodeBlock extends Component {
    static defaultProps = {
        language: null
      };

    componentWillMount(){
        SyntaxHighlighter.registerLanguage("jsx", jsx);
        SyntaxHighlighter.registerLanguage("javascript", javascript);
    }
      
    render(){
        const { language,value } = this.props;
        return (
            <SyntaxHighlighter language={ language } style={ coy }>
                { value }
            </SyntaxHighlighter>
        )
    }
}

export default CodeBlock