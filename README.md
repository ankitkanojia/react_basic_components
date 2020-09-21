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

```
import React, { Component } from 'react';
import DragDropContainer from './../Components/DragDrop/DragDropContainer';
import DropTarget from './../Components/DragDrop/DropTarget';
import './../Components/DragDrop/dragdrop.css';

class DragDrop extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            draggableImages : [],
            currentSelectedIndex : 0,
            isDragged : false
        }
    }

    componentDidMount (){
        const context = require.context('./../images', true, /.png$/);
        const imagesNameCollection = [];
        context.keys().forEach((data, key) => {
            imagesNameCollection.push({ index : key, imageName : data.replace("./","") , isDragged : false })
        });   
        this.setState({
            draggableImages : imagesNameCollection
        });
    }

    onDragStart = (index) => {
        this.setState({
            currentSelectedIndex : index,
            isDragged : false
        });
    };

    onDragEnd = () => {
        let updatedDrggableImages = this.state.draggableImages;
        updatedDrggableImages[this.state.currentSelectedIndex].isDragged = this.state.isDragged;
        this.setState({
            draggableImages : updatedDrggableImages,
            isDragged : false
        });    
    }

    onDragLeave = () => {
        this.setState({
            isDragged : false
        });
    }

    onHit = () =>{
        this.setState({
            isDragged : true
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h3>Draggable / Droppable Example</h3><br />
                    </div>
                    <div className="col-sm-6 leftContainer">
                        <div className="row p-2 draggbleContainer">
                            <label className="defaultLable">Drag Me here!</label>
                            <DropTarget
                                onDragEnter={() => (console.log('onDragEnter'))}
                                onDragLeave={this.onDragLeave}
                                onHit={this.onHit}
                                targetKey="simple">
                            </DropTarget>
                            {this.state.draggableImages.map((data, key) => {
                                if (data.isDragged) {
                                    return <DragDropContainer key={key}
                                        onDragStart={() => this.onDragStart(data.index)}
                                        onDrag={() => (console.log('dragging'))}
                                        onDragEnd={this.onDragEnd}
                                        targetKey="simple"
                                        className="col-sm-2">
                                        <img width="78px" src={require("./../images/" + data.imageName)} />
                                    </DragDropContainer>
                                }
                            })}
                        </div>
                    </div>
                    <div className="col-sm-6" style={{ backgroundColor: 'lightgray', minHeight: "500px", border: "1px solid black" }}>
                        <div className="row p-2">
                            {this.state.draggableImages.map((data, key) => {
                                if (!data.isDragged) {
                                    return <DragDropContainer key={key}
                                        onDragStart={() => this.onDragStart(data.index)}
                                        onDrag={() => (console.log('dragging'))}
                                        onDragEnd={this.onDragEnd}
                                        targetKey="simple"
                                        className="col-sm-2">
                                        <img width="78px" src={require("./../images/" + data.imageName)} />
                                    </DragDropContainer>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default DragDrop;
import React, { Component } from 'react';
import DragDropContainer from './../Components/DragDrop/DragDropContainer';
import DropTarget from './../Components/DragDrop/DropTarget';
import './../Components/DragDrop/dragdrop.css';

class DragDrop extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            draggableImages : [],
            currentSelectedIndex : 0,
            isDragged : false
        }
    }

    componentDidMount (){
        const context = require.context('./../images', true, /.png$/);
        const imagesNameCollection = [];
        context.keys().forEach((data, key) => {
            imagesNameCollection.push({ index : key, imageName : data.replace("./","") , isDragged : false })
        });   
        this.setState({
            draggableImages : imagesNameCollection
        });
    }

    onDragStart = (index) => {
        this.setState({
            currentSelectedIndex : index,
            isDragged : false
        });
    };

    onDragEnd = () => {
        let updatedDrggableImages = this.state.draggableImages;
        updatedDrggableImages[this.state.currentSelectedIndex].isDragged = this.state.isDragged;
        this.setState({
            draggableImages : updatedDrggableImages,
            isDragged : false
        });    
    }

    onDragLeave = () => {
        this.setState({
            isDragged : false
        });
    }

    onHit = () =>{
        this.setState({
            isDragged : true
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h3>Draggable / Droppable Example</h3><br />
                    </div>
                    <div className="col-sm-6 leftContainer">
                        <div className="row p-2 draggbleContainer">
                            <label className="defaultLable">Drag Me here!</label>
                            <DropTarget
                                onDragEnter={() => (console.log('onDragEnter'))}
                                onDragLeave={this.onDragLeave}
                                onHit={this.onHit}
                                targetKey="simple">
                            </DropTarget>
                            {this.state.draggableImages.map((data, key) => {
                                if (data.isDragged) {
                                    return <DragDropContainer key={key}
                                        onDragStart={() => this.onDragStart(data.index)}
                                        onDrag={() => (console.log('dragging'))}
                                        onDragEnd={this.onDragEnd}
                                        targetKey="simple"
                                        className="col-sm-2">
                                        <img width="78px" src={require("./../images/" + data.imageName)} />
                                    </DragDropContainer>
                                }
                            })}
                        </div>
                    </div>
                    <div className="col-sm-6" style={{ backgroundColor: 'lightgray', minHeight: "500px", border: "1px solid black" }}>
                        <div className="row p-2">
                            {this.state.draggableImages.map((data, key) => {
                                if (!data.isDragged) {
                                    return <DragDropContainer key={key}
                                        onDragStart={() => this.onDragStart(data.index)}
                                        onDrag={() => (console.log('dragging'))}
                                        onDragEnd={this.onDragEnd}
                                        targetKey="simple"
                                        className="col-sm-2">
                                        <img width="78px" src={require("./../images/" + data.imageName)} />
                                    </DragDropContainer>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default DragDrop;
```