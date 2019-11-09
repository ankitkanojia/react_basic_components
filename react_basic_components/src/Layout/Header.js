import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Home</Link> <span className="sr-only">(current)</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                {/* <li className={"nav-item " + (this.props.location.pathname === "/" ? " active" : "")}>
                                    <Link className="nav-link" to="/">Home</Link> <span className="sr-only">(current)</span>
                                </li> */}
                                {/* <li className={"nav-item" + (this.props.location.pathname === "/imageverification" ? " active" : "")}>
                                    <Link className="nav-link" to="/imageverification">Image Verification</Link>
                                </li>
                                <li className={"nav-item" + (this.props.location.pathname === "/scrollbar" ? " active" : "")}>
                                    <Link className="nav-link" to="/scrollbar">Scrollbar</Link>
                                </li>
                                <li className={"nav-item" + (this.props.location.pathname === "/charts" ? " active" : "")}>
                                    <Link className="nav-link" to="/charts">Charts</Link>
                                </li>
                                <li className={"nav-item" + (this.props.location.pathname === "/pagination" ? " active" : "")}>
                                    <Link className="nav-link" to="/pagination">Pagination</Link>
                                </li> */}
                            </ul>
                        </div>
                    </nav>
                    {/* <ul>
                        <li className={this.props.location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
                        <li className={this.props.location.pathname === "/imageverification" ? "active" : ""}><Link to="/imageverification">Image Verification</Link></li>
                    </ul> */}
                </header>
            </React.Fragment>
        )
    }
}

export default withRouter(Header);