import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // from react-router-dom
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props; // from mapStateToProps

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { // ownProps === this(PostsShow).props
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
