import React, { Component } from 'react';
import CustomImage  from "./../Components/ImageVerification/ImageVerification";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                      <CustomImage width="200" src="logo.svg" className="img-thumbnail" alt="logo image" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;