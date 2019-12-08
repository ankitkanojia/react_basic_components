import React, { Component } from 'react';
import CustomImage  from "./../Components/ImageVerification/ImageVerification";
import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst } from "react-syntax-highlighter/dist/styles";

class Home extends Component {
    render() {

        const defaultSnippet = `import React, { Component } from 'react';

class ImageVerification extends Component {
    render() {
        let image_path = '';
        try {
                image_path = require('./../../images/' + this.props.src);
            } catch{
                image_path = require('./../../images/no_image.svg');
            }
   
            return (
                    <img width={this.props.width} src={image_path} className={this.props.className} alt={this.props.alt} />
            );
        }
    }
        
export default ImageVerification;`;

        return (
            <React.Fragment>
                <div class="sidenav">
                    <a href="#demo">Demo</a>
                    <a href="#installation">Guide</a>
                </div>
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