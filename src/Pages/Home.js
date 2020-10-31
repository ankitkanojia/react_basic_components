import React, { Component } from 'react';
import "./../Components/TreeView/TreeView.css"
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/treeview"><button style={{ height: "100px", minWidth: "100px" }} className="btn btn-success">TreeView</button></Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/imageverification"><button style={{ height: "100px", minWidth: "100px" }} className="btn btn-success">Image Verification</button></Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/scrollbar"><button style={{ height: "100px", minWidth: "100px" }} className="btn btn-success">ScrollBar</button></Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/charts"><button style={{ height: "100px", minWidth: "100px" }} className="btn btn-success">Charts</button></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/pagination"><button style={{ height: "100px", minWidth: "100px" }} className="btn btn-success">Pagiation</button></Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/textchat"><button style={{ height: "100px", minWidth: "100px" }} className="btn btn-success">Text-Chat</button></Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/tablepagination"><button style={{ height: "100px", minWidth: "100px" }} className="btn btn-success">TablePagination</button></Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/dragdrop"><button style={{ height: "100px", minWidth: "100px" }} className="btn btn-success">Drag-Drop</button></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/notification"><button style={{ height: "100px", minWidth: "100px" }} className="btn btn-success">Push-Notification</button></Link>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Home;