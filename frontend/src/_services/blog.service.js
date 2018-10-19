import config from 'config';
import { authHeader } from '../_helpers';

export const blogService = {
    getAllBlogs,
    postBlog
};

function getAllBlogs() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/blog`, requestOptions).then(handleResponse);
}

function postBlog(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    };
    return fetch(`${config.apiUrl}/blog`, requestOptions)
        .then(handleResponse)
        .then(getAllBlogs)
        .then(locationReload)
}

function locationReload() {
    location.reload();
    return true;
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}