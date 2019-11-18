import React , { Component } from 'react';
import { TablePagination  } from 'react-pagination-table';
import './TablePagination.css';

export default class TablePaginationSample extends Component {
    render() {
        return (
            <TablePagination
                    title="TablePagination"
                    subTitle="Sub Title"
                    headers={ this.props.Header }
                    data={ this.props.data }
                    columns="name.age.size.phone.gender"
                    perPageItemCount={ 5 }
                    totalCount={ this.props.data.length }
                    arrayOption={ [["size", 'all', ' ']] }
                />
        );
    }
};