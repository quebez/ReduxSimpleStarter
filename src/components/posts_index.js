import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; //To navigete around sites
import _ from 'lodash';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    //autorun when component shows up in DOM, one time 'run'
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <div>
                    <li className="list-group-item" key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { posts: state.posts };
}

//same but easier as with the dispatch function
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);