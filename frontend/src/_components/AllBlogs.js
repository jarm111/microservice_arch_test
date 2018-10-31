
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowBlog } from './ShowBlog';
import { blogActions } from '../_actions';
class AllBlogs extends Component {
    componentDidMount() {
        this.props.dispatch(blogActions.getAllBlogs());
    }
    render() {
        const { user, users, blogs } = this.props;
        return (
            <div>
                <h3>Blogipostaukset</h3>
                {blogs.loading && <em>Loading blogs...</em>}
                {blogs.error && <span className="text-danger">ERROR: {blogs.error}</span>}
                {blogs.items &&  blogs.items.map((blog) => <ShowBlog key={blog._id} blog={blog} user={user} />)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { users, blogs, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
        blogs
    };
}

export default connect(mapStateToProps)(AllBlogs);