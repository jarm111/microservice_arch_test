import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BlogForm } from '../_components/BlogForm'
import { userActions } from '../_actions';
import Moment from 'react-moment';
import AllBlogs from '../_components/AllBlogs';

class HomePage extends React.Component {
    render() {
        const { user, users, blogs } = this.props;
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
                    <BlogForm user />
                </div>
                <div className="col-lg-12">
                    {/*
                    TODO: luo blogeille oma komponentti.
             
                    }
                    {blogs.loading && <em>Loading blogs...</em>}
                    {blogs.error && <span className="text-danger">ERROR: {blogs.error}</span>}
                    {blogs && console.log(blogs.items)}
                    {blogs.items &&
                        <div>
                            {blogs.items.map((blogs, index) =>

                                <div key={blogs._id} className="border">
                                    <div className="divider">
                                        <h3>{blogs.title}</h3>
                                        <h4>Kirjoittanut: {this.props.user.firstName} {this.props.user.lastName} </h4>
                                        <h6>
                                            <Moment format="DD/MM/YYYY HH:mm">
                                            {blogs.created_at}
                                            </Moment>
                                        </h6>
                                    </div>
                                    <p>{blogs.post}</p>
                                </div>
                            )}
                        </div>
                          */}
                    <AllBlogs/>
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };