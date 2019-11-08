import React from 'react';
import PaginationComponent from "react-js-pagination";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div>
        <br />
        <PaginationComponent
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
      />
      </div>
    );
  }
}

export default Pagination;