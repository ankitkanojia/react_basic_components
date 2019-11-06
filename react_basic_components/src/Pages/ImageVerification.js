import React, { Component } from 'react';
import CustomImage  from "./../Components/ImageVerification/ImageVerification";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row p-3">
                    <div className="col-md-12">
                      <CustomImage width="200" src="logo.svg" className="img-thumbnail" alt="logo image" />
                      <CustomImage width="200" src="wrong_image.svg" className="img-thumbnail ml-2" alt="logo image" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;