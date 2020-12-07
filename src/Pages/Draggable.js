import React, { Component } from 'react';
import './../Components/DragDrop/dragdrop.css';
import DraggableObject from "react-draggable";

class Draggable extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            draggableImages : []
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
                        </div>
                    </div>
                    <div className="col-sm-6" style={{ backgroundColor: 'lightgray', minHeight: "500px", border: "1px solid black" }}>
                        <div className="row p-2">
                            {this.state.draggableImages.map((data, key) => {
                                if (!data.isDragged) {
                                    return <div className="col-sm-2">
                                        <img width="78px" src={require("./../images/" + data.imageName)} />
                                    </div>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default Draggable;
