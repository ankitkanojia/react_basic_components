import React, { Component } from 'react';
import './../Css/CustomPagination.css';

const data = [
{ "req_no": 1, "title": "test1" },
{ "req_no": 2, "title": "test2" },
{ "req_no": 3, "title": "test3" },
{ "req_no": 4, "title": "test4" },
{ "req_no": 5, "title": "test5" },
{ "req_no": 6, "title": "test6" },
{ "req_no": 7, "title": "test7" },
{ "req_no": 8, "title": "test8" },
{ "req_no": 9, "title": "test9" },
{ "req_no": 10, "title": "test10" },
{ "req_no": 11, "title": "test11" },
{ "req_no": 12, "title": "test12" },
{ "req_no": 13, "title": "test13" },
{ "req_no": 14, "title": "test14" },
{ "req_no": 15, "title": "test15" },
{ "req_no": 16, "title": "test16" },
{ "req_no": 17, "title": "test17" },
{ "req_no": 18, "title": "test18" },
{ "req_no": 19, "title": "test19" },
{ "req_no": 20, "title": "test20" },
{ "req_no": 21, "title": "test21" },
{ "req_no": 22, "title": "test22" },
{ "req_no": 23, "title": "test23" },
{ "req_no": 24, "title": "test24" },
{ "req_no": 25, "title": "test25" },
{ "req_no": 26, "title": "test26" }];

class TablePagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemPerPage: 5,
            itemCollection: []
        };
    }

    componentDidMount() {
        const updatedCollection = data.filter(m => m.req_no >= this.state.activePage && m.req_no <= (this.state.activePage * this.state.itemPerPage));
        this.setState({
            itemCollection: updatedCollection
        });
    }

    PerPage = (e) => {
        const updatedCollection = data.filter(m => m.req_no >= this.state.activePage && m.req_no <= (this.state.activePage * e.target.value));
        this.setState({
            itemCollection: e.target.value.toLowerCase() === "all" ? data : updatedCollection,
            itemPerPage : e.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <table id="request-table">
                        <tr><th>Request No</th><th>Title</th></tr>
                        {this.state.itemCollection.map((item, index) => {
                            return <tr><td>{item.req_no}</td><td>{item.title}</td></tr>
                        })}
                    </table>
                </div>

                <div class="clearfix">
                    <div class="box options">
                        <label>Requests Per Page: </label>
                        <select onChange={this.PerPage}>
                            <option>5</option>
                            <option>10</option>
                            <option>ALL</option>
                        </select>
                    </div>
                    <div class="box pagination">
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TablePagination;