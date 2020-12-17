import React , { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class CustomScrollbars extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = { top: 0 };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
    }

    render() {
        return (
            <Scrollbars
                {...this.props}/>
        );
    }
};