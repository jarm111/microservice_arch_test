import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { ShowBlog } from '../_components/ShowBlog';

import Moment from 'react-moment';
class BlogPage extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(userActions.getAllBlogs());
    }
    render() {
        const { user, users, blogs, params} = this.props;
        return (
            <div className="container">
                <div className="navbar">
                    <h1>Yet Another Blog App</h1>
                    <Link to="/login">Logout</Link>
                </div>
                <div className="navbar">
                    <h2>Morjesta, {user.firstName} {user.lastName}!</h2>
                </div>
                <div className="col-lg-12">
                <h3>Yksittäinen blogi</h3>
                </div>
                <div className="col-lg-12"> 
                {console.log(this.props.match.params, "params")}
                {/*
                {blogs.items &&  blogs.items.filter((blog => blog._id === params. ) => <ShowBlog key={blog._id} blog={blog} user={user} />)}
                </div> */}
            </div>
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

const connectedBlogPage = connect(mapStateToProps)(BlogPage);
export { connectedBlogPage as BlogPage };