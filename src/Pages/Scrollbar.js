import React, { Component } from 'react';
import CustomScrollbars from "./../Components/CustomScrollbars/CustomScrollbars";
import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst } from "react-syntax-highlighter/dist/styles";

class Scrollbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <ul style={{ height: 500 }}>
                            <CustomScrollbars>
                                {[...Array(50)].map((data, index) => {
                                    return <li>Link {index}</li>
                                })}
                            </CustomScrollbars>
                        </ul>
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

export default Scrollbar;