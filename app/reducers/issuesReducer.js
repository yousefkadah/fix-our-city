import * as types from '../types';

const initialState = {
  list: [],
  issuesLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ISSUES: {
      return Object.assign({}, state, { list: action.issues, issuesLoading: false });
    }
    case types.ISSUES_LOADING: {
      return Object.assign({}, state, { issuesLoading: true });
    }
    case types.SELECT_ISSUE: {
      // eslint-disable-next-line no-underscore-dangle
      const selected = state.list.filter(issue => issue.obj._id === action.id);
      return Object.assign({}, state, { selected: selected[0] });
    }
    case types.ISSUE_HIGHLIGHTED: {
      // eslint-disable-next-line no-underscore-dangle
      const highlighted = state.list.filter(issue => issue.obj._id === action.id);
      return Object.assign({}, state, { highlighted: highlighted[0] });
    }
    case types.UPDATE_VOTES: {
      console.log('issue', action.issue);
      const removeIndex = state.list.findIndex((element) =>
         element.obj._id === action.id
      );
      
      return Object.assign({}, state, {list: [...list.slice(0, removeIndex), ]})
    }
    default:
      return state;
  }
};
