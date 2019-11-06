import React, { Component } from 'react';
import CustomScrollbars from "./../Components/CustomScrollbars/CustomScrollbars";

class Scrollbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <ul style={{ height: 500 }}>
                        <CustomScrollbars>
                                {[...Array(50)].map((data, index) => {
                                    return <li>Link {index}</li>
                                })}
                        </CustomScrollbars>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Scrollbar;