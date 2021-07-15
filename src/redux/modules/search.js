// AXIOS
import instance from '../../common/axios';

// ACTION
const SEARCH_LIST = 'SEARCH_LIST';

// ACTION CREATOR
const getSearchList = (searchList, start) => ({ type: SEARCH_LIST, searchList, start });

// INITIAL STATE
const initialState = {
  list: [],
  start: 0,
};

// MIDDLEWARE
const searchPostDB = (keyword, limit = 6) => {
  return function (dispatch, getState) {
    const start = getState().search.start;

    if (start === null) return;

    instance
      .get(`/api/search?keyword=${keyword}&start=${start}&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getSearchList(res.data.result, null));
          return;
        }

        if (res.data.result.length >= limit + 1) res.data.result.pop();

        dispatch(getSearchList(res.data.result, start + limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// REDUCER
function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_LIST:
      return { list: [...state.list, ...action.searchList], start: action.start };

    default:
      return state;
  }
}

export default search;

export const searchActions = {
  getSearchList,
  searchPostDB,
};
