import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { commentActions } from '../_actions';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            comment: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { post, title } = this.state;
        const { dispatch } = this.props;
        if (post && title) {
            var data = {
                "comment": post,
                "userID": this.props.user._id,
                "user": `${this.props.user.firstName} ${this.props.user.lastName}`  
            }
            console.log(data.user);
            dispatch(commentActions.postComment(data));
        }
    }

    render() {
        const { loading } = this.props;
        const { title, post, submitted } = this.state;
        return (
            <div>
                <h4>Lähetä kommentti</h4>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !title ? ' has-error' : '')}>
                        <label htmlFor="title">Otsikko</label>
                        <input type="text" className="form-control" name="title" value={title} onChange={this.handleChange} />
                        {submitted && !title &&
                            <div className="help-block">Otsikko vaaditaan</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !post ? ' has-error' : '')}>
                        <label htmlFor="post">Kommentti</label>
                        <textarea type="text" className="form-control"  name="post" value={post} onChange={this.handleChange} />
                        {submitted && !post &&
                            <div className="help-block">Sisältö vaaditaan</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Lähetä</button>
                        {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loading, authentication } = state;
    const { user } = authentication;
    return {
        loading,
        user
    };
}

const connectedCommentForm = connect(mapStateToProps)(CommentForm);
export { connectedCommentForm as CommentForm }; 