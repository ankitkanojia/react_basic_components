import React , { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './CustomScrollbars.css';

export default class CustomScrollbars extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = { top: 0 };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }

    handleUpdate(values) {
        const { top } = values;
        this.setState({ top });
    }

    renderThumb({ style, ...props }) {
        const { top } = this.state;
        const thumbStyle = {
            background:  'linear-gradient(135deg, #ff0381 0%, #ffbf00 100%)'
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

    render() {
        return (
            <Scrollbars
                renderThumbHorizontal={this.renderThumb}
                renderThumbVertical={this.renderThumb}
                onUpdate={this.handleUpdate}
                {...this.props}/>
        );
    }
};