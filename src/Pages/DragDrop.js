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
