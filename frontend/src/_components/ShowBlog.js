import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
class ShowBlog extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/*<Link to={`/blog/${this.props.blog._id}`} > <h3>{this.props.blog.title}</h3></Link>*/}
                <h3>{this.props.blog.title}</h3>
                <h4>Kirjoittaja: {this.props.user.firstName} {this.props.user.lastName}</h4>
                <h6>
                    <Moment format="DD/MM/YYYY HH:mm">
                        {this.props.blog.created_at}
                    </Moment>
                </h6>
                <p>{this.props.blog.post}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loading, authentication, blogs } = state;
    const { user } = authentication;
    return {
        loading,
        user,
        blogs
    };
}

const connectedShowBlog = connect(mapStateToProps)(ShowBlog);
export { connectedShowBlog as ShowBlog }; 