import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from "../actions";
import {Link} from "react-router-dom";

class PostsShow extends Component {
    componentDidMount() {
        const {match: {params: {id}}} = this.props;
        this.props.fetchPost(id);
    }

    render = () => {
        if (!this.props.post) {
            return <div>Loading...</div>;
        }
        const {id, categories, content, title} = this.props.post;
        return (
            <div>
                <Link to={"/"}>Back To Index</Link>
                <button
                    className={"btn btn-danger pull-xs-right"}
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{title}</h3>
                <h6>Categories: {categories}</h6>
                <p>{content}</p>
            </div>
        );
    }

    onDeleteClick = () => {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
}

function mapStateToProps({posts}, ownProps) {

    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);