import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BlogForm } from '../_components/BlogForm'
import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAllBlogs());
    }

    render() {
        const { user, users, blogs } = this.props;
        return (
            <div className="container">
                <div className="navbar">
                    <h1>Yet another blog app</h1>
                    <Link to="/login">Logout</Link>
                </div>
                <div className="navbar">
                    <h2>Morjesta, {user.firstName} {user.lastName}!</h2>
                </div>
                <div className="col-lg-12">
                    <BlogForm user />
                </div>
                <div className="col-lg-12">
                    <h3>Blogikirjoitukset:</h3>
                    {blogs.loading && <em>Loading blogs...</em>}
                    {blogs.error && <span className="text-danger">ERROR: {blogs.error}</span>}
                    {blogs && console.log(blogs.items)}
                    {blogs.items &&
                        <div>
                            {blogs.items.map((blogs, index) =>

                                <div key={blogs._id} className="border">
                                    <div className="divider">
                                        <h3>Otsikko: {blogs.title}</h3>
                                        <h4>Kirjoittanut: {blogs.user}</h4>
                                    </div>
                                    <p>{blogs.post}</p>
                                </div>
                            )}
                        </div>
                    }
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