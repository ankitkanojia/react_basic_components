import React, { Component } from 'react';
import PaginationComponent from "react-js-pagination";
import 'bootstrap-less/bootstrap/bootstrap.less';

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 15
        };
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <PaginationComponent
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Pagination;