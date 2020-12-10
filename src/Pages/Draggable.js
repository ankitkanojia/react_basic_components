import React, { Component } from 'react';
import './../Components/DragDrop/dragdrop.css';
import DraggableObject from "react-draggable";
import * as ReactDOM from 'react-dom';

class Draggable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            draggableImages: []
        }
    }

    componentDidMount() {
        const context = require.context('./../images', true, /.png$/);
        const imagesNameCollection = [];
        context.keys().forEach((data, key) => {
            imagesNameCollection.push({ index: key, imageName: data.replace("./", ""), isDragged: false })
        });
        this.setState({
            draggableImages: imagesNameCollection
        });
    }

    handleDrag = (e) => {
        let currentObj = ReactDOM.findDOMNode(this.refs["droppableContainer"]).getBoundingClientRect();
        if ((currentObj.left < e.x && e.x < currentObj.left + currentObj.width) &&
            ((currentObj.top - 3) < e.y && e.y < currentObj.top + currentObj.height)) {
            this.refs["droppableContainer"].classList.add("activeWindow");
        } else {
            this.refs["droppableContainer"].classList.remove("activeWindow");
        }
    };

    handleStop = (e, index) => {
        let currentObj = ReactDOM.findDOMNode(this.refs["droppableContainer"]).getBoundingClientRect();
        if ((currentObj.left < e.x && e.x < currentObj.left + currentObj.width) &&
            ((currentObj.top - 3) < e.y && e.y < currentObj.top + currentObj.height)) {
            var draggedObject = this.state.draggableImages;
            draggedObject[index].isDragged = true;
            this.setState({
                draggableImages: draggedObject
            });
        }
        this.refs["droppableContainer"].classList.remove("activeWindow");
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h3>Draggable / Droppable Example</h3><br />
                    </div>
                    <div className="col-sm-6 leftContainer">
                        <div className="row p-2 draggbleContainer" ref={"droppableContainer"}>
                            {this.state.draggableImages.map((data, key) => {
                                if (data.isDragged) {
                                    return <DraggableObject
                                        key={key}
                                        onDrag={(e) => this.handleDrag(e)}
                                        onStop={(e) => this.handleStop(e, key)}
                                        position={{ x: 0, y: 0 }}
                                    ><div className="col-sm-2">
                                            <img width="78px" src={require("./../images/" + data.imageName)} />
                                        </div>
                                    </DraggableObject>
                                }
                            })}
                            <label className="defaultLable">Drag Me here!</label>
                        </div>
                    </div>
                    <div className="col-sm-6" style={{ backgroundColor: 'lightgray', minHeight: "500px", border: "1px solid black" }}>
                        <div className="row p-2">
                            {this.state.draggableImages.map((data, key) => {
                                if (!data.isDragged) {
                                    return <DraggableObject
                                        key={key}
                                        onDrag={(e) => this.handleDrag(e)}
                                        onStop={(e) => this.handleStop(e, key)}
                                        position={{ x: 0, y: 0 }}
                                    ><div className="col-sm-2">
                                            <img width="78px" src={require("./../images/" + data.imageName)} />
                                        </div>
                                    </DraggableObject>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default Draggable;
