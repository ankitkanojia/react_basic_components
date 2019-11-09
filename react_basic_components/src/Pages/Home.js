import React, { Component } from 'react';
import "./../Components/TreeView/TreeView.css"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <br />
                <div class="row">
                    <div class="col-md-3">
                        <div>
                            <h3 class="text-danger">API Repository</h3>
                            <ul class="tree">
                                <li>
                                    Login API
                    <ul>
                                        <li><a href="true">Link</a></li>
                                        <li><a href="true">Link</a></li>
                                        <li><a href="true">Link</a></li>
                                        <li><a href="true">Link</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>

            </React.Fragment>
                )
            }
        }
        
export default Home;