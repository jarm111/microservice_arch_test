import { blogConstants } from '../_constants';

export function blogs(state = {}, action) {
  switch (action.type) {
    case blogConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case blogConstants.GETALL_SUCCESS:
      return {
        items: action.blogs
      };
    case blogConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };

      case blogConstants.POST_BLOG_REQUEST:
      return {
        loading: true
      };
      case blogConstants.POST_BLOG_SUCCESS:
      return {
        items: action.blogs
      };
      case blogConstants.POST_BLOG_FAILURE:
      return {
        error: action.error
      };

    default:
      return state
  }
}