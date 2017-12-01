import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook} from '../actions/index';

//parent of book detail - smart component that has direct access to state
class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                    key={book.title} 
                    className='list-group-item'
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//maps state to state
function mapStateToProps(state) {
    //Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    };
}

//call selectBook triggers dispatch which pass them to reducers
//makes selectBook aviable in this.props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//glue for react and redux
//TODO: check react-redux documentation about connect
export default connect(mapStateToProps, mapDispatchToProps)(BookList);