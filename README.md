# Developed React Basic Components

Developed react basic components which can be re-usable in react application.


## 1. Custom Scrollbar

A scrollbar is an interaction technique or widget in which continuous text, pictures, or any other content can be scrolled in a predetermined direction on a computer display.

Scrollbar with colored functionality in which developer can defined its own desired color.

### Installation or React Code

```
import React , { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

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
```

### 2. Table Pagination

Pagination is a simple navigation method that lets you split a huge amount of content within your tables into smaller parts. By default, pagination is initialized with Previous, page numbers and Next buttons. To manipulate the table pagination we can use one of the options presented below.

### Installation or React Code

```
import React , { Component } from 'react';
import { TablePagination  } from 'react-pagination-table';
import './TablePagination.css';

export default class TablePaginationSample extends Component {
    render() {
        return (
            <TablePagination
                    title="TablePagination"
                    subTitle="Sub Title"
                    headers={ this.props.Header }
                    data={ this.props.data }
                    columns="name.age.size.phone.gender"
                    perPageItemCount={ 5 }
                    totalCount={ this.props.data.length }
                    arrayOption={ [["size", 'all', ' ']] }
                />
        );
    }
};
```


### 3. Drag-Drop

Drag-Drop functionality object using react application. 
