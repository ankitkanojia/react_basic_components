import React, { Component } from 'react';

class ImageVerification extends Component {
    render() {
        let image_path = '';
        try {
            image_path = require('./images/' + this.props.src);
        } catch{
            image_path = require('./images/no_image.svg');
        }
        return (
            <img width={this.props.width} src={image_path} className={this.props.className} alt={this.props.alt} />
        );
    }
}

export default ImageVerification;