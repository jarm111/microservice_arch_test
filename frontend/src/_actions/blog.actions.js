import { userConstants } from '../_constants';
import { blogConstants } from '../_constants';
import { blogService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const blogActions = {
    getAllBlogs,
    postBlog
};

function postBlog(blogData) {
    return dispatch => {
        dispatch(request({ blogData }));

        blogService.postBlog(blogData)
            .then(
                blog => { 
                    dispatch(success(blog));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(blog) { return { type: blogConstants.POSTBLOG_REQUEST, blog } }
    function success(blog) { return { type: blogConstants.POSTBLOG_SUCCESS, blog } }
    function failure(error) { return { type: blogConstants.POSTBLOG_FAILURE, error } }
}

function getAllBlogs() {
    return dispatch => {
        dispatch(request());

        blogService.getAllBlogs()
            .then(
                blogs => dispatch(success(blogs)),
                error => dispatch(failure(error))
            );
    };
    function request() { return { type: blogConstants.GETALL_REQUEST } }
    function success(blogs) { return { type: blogConstants.GETALL_SUCCESS, blogs } }
    function failure(error) { return { type: blogConstants.GETALL_FAILURE, error } }
}