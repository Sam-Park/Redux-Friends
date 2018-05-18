import { FRIENDS_FETCHED, FETCHING_FRIENDS } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
  }
export default ( state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {fetchingFriends: true});
        case FRIENDS_FETCHED:
            return Object.assign({}, state, { friendsFetched: true, fetchingFriends: false });
        default:
            return state;
    }
}