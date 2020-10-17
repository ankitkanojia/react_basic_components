import React from 'react';
import PaginationComponent from "react-js-pagination";
import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst } from "react-syntax-highlighter/dist/styles";

class Pagination extends React.Component {
    constructor(props) {
          super();
          this.state = {
            activePage: 1,
            itemCollection: [],
            totalItemsCount: 450,
            activePage: 1,
            itemsCountPerPage: 10,
            pageRangeDisplayed: 5,
            prevPageText: "⟨",
            firstPageText: "«",
            lastPageText: "»",
            nextPageText: "⟩",
            hideFirstLastPages : false
          };
          this.handleChange = this.handleChange.bind(this);
        }
      
        render() {
          return (
            <React.Fragment>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className='leftPanel'>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a href='#default'>
                            <h4 id='default' className="panel-title">Pagination Configuration Option(s)</h4>
                          </a>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label class="control-label " for="name">
                                activePage
                            </label>
                              <input onChange={this.handleChange} value={this.state.activePage} class="form-control" id="activePage" name="activePage" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label class="control-label " for="name">
                                itemsCountPerPage
                            </label>
                              <input onChange={this.handleChange} value={this.state.itemsCountPerPage} class="form-control" id="itemsCountPerPage" name="itemsCountPerPage" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label class="control-label " for="name">
                                totalItemsCount
                            </label>
                              <input onChange={this.handleChange} value={this.state.totalItemsCount} class="form-control" id="totalItemsCount" name="totalItemsCount" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label class="control-label " for="name">
                                pageRangeDisplayed
                            </label>
                              <input onChange={this.handleChange} value={this.state.pageRangeDisplayed} class="form-control" id="pageRangeDisplayed" name="pageRangeDisplayed" type="text" />
                            </div>
                          </div>
                        </div>
      
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label class="control-label " for="name">
                                prevPageText
                            </label>
                              <input onChange={this.handleChange} value={this.state.prevPageText} class="form-control" id="prevPageText" name="prevPageText" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label class="control-label " for="name">
                                firstPageText
                            </label>
                              <input onChange={this.handleChange} value={this.state.firstPageText} class="form-control" id="firstPageText" name="firstPageText" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label class="control-label " for="name">
                                lastPageText
                            </label>
                              <input onChange={this.handleChange} value={this.state.lastPageText} class="form-control" id="lastPageText" name="lastPageText" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label class="control-label " for="name">
                                nextPageText
                            </label>
                              <input onChange={this.handleChange} value={this.state.nextPageText} class="form-control" id="nextPageText" name="nextPageText" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label class="control-label " for="name">
                                hideFirstLastPages
                             </label> <br></br>
                             <div className="radio-inline">
                              <label>
                                { this.state.hideFirstLastPages === true ? 
                                <input onChange={this.handleChange} name="hideFirstLastPages"  type="radio" value={true} checked /> : 
                                <input onChange={this.handleChange} name="hideFirstLastPages"  type="radio" value={true}  /> }
                                true
                              </label>
                            </div>
                            <div className="radio-inline">
                              <label>
                              { this.state.hideFirstLastPages === false ? 
                                <input onChange={this.handleChange} name="hideFirstLastPages"  type="radio" value={false} checked /> : 
                                <input onChange={this.handleChange} name="hideFirstLastPages"  type="radio" value={false}  /> }
                                false
                              </label>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className='app'>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <a href='#default'>
                            <h4 id='default' className="panel-title">Default</h4>
                          </a>
                        </div>
                        <div className="panel-body">
                          <SyntaxHighlighter language='javascript' style={sunburst}>{defaultSnippet}</SyntaxHighlighter>
                          <div className='text-center'>
                            <PaginationComponent
                              itemClass="page-item"
                              linkClass="page-link"
                              activePage={this.state.activePage ? this.state.activePage : 1 }
                              itemsCountPerPage={this.state.itemsCountPerPage ? this.state.itemsCountPerPage : 10 }
                              totalItemsCount={this.state.totalItemsCount ? this.state.totalItemsCount : 450 }
                              pageRangeDisplayed={this.state.pageRangeDisplayed ? this.state.pageRangeDisplayed : 5 }
                              prevPageText={this.state.prevPageText ? this.state.prevPageText : "⟨" }
                              firstPageText={this.state.firstPageText ? this.state.firstPageText : "«" }
                              lastPageText={this.state.lastPageText ? this.state.lastPageText : "»" }
                              nextPageText={this.state.nextPageText ? this.state.nextPageText : "⟩" }
                              hideFirstLastPages={this.state.hideFirstLastPages ? this.state.hideFirstLastPages : false }
                              onChange = {this.handlePageChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
    );
  }
}

export default Pagination;