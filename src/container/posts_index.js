import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions";
import {Link} from 'react-router-dom'
import _ from 'lodash';

class PostsIndex extends Component {
    componentDidMount = () => {
        this.props.fetchPosts();
    }

    render = () => {
        return (
            <div>
                <div className={"text-xs-right"}>
                    <Link className={"btn btn-primary"} to={"/posts/new"}>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }

    renderPosts = () => {
        return _.map(this.props.posts, (post, id) => {
            return (<li className={"list-group-item"} key={id}>
                {post.title}
            </li>);
        });
    }
}

function mapStateToProps({posts}) {
    return {posts};
}


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);