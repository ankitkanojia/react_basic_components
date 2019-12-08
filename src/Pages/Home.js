import React, { Component } from 'react';
import "./../Components/TreeView/TreeView.css"
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <br />
                <div class="row">
                    <div class="col-md-3">
                        <div>
                            <h3 class="text-danger">COMPONENTS</h3>
                            <ul class="tree">
                                <li><Link to="/imageverification">Imge Verification</Link></li>
                                <li><Link to="/scrollbar">ScrollBar</Link></li>
                                <li><Link to="/charts">Charts</Link></li>
                                <li><Link to="/pagination">Pagiation</Link></li>
                                <li><Link to="/tablepagination">TablePagination</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Home;