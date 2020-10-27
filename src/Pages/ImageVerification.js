import React, { Component } from 'react';
import CustomImage  from "./../Components/ImageVerification/ImageVerification";
import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst } from "react-syntax-highlighter/dist/styles";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row p-3">
                    <div className="col-md-6">
                      <CustomImage width="200" src="logo.svg" className="img-thumbnail" alt="logo image" />
                      <CustomImage width="200" src="wrong_image.svg" className="img-thumbnail ml-2" alt="logo image" />
                    </div>
                    <div className="col-md-6">
                        <div className='app'>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <a href='#default'>
                                        <h4 id='default' className="panel-title">Default</h4>
                                    </a>
                                </div>
                                <div className="panel-body">
                                    <SyntaxHighlighter language='javascript' style={sunburst}>{defaultSnippet}</SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;