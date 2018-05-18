import { connect } from 'react-redux'
import React, { Component } from 'react';
import logo from '../logo.svg';

class FriendsList extends Component {
 
    render() { 
        return ( 
            <div>
                {this.props.fetchingFriends ? (<img src={logo}/>):null}
            </div>
         )
    }
}
 
const mapStateToProps = (state) => {
    return (
        {
            friends: state.friendsReducer.friends,
            fetchingFriends: state.friendsReducer.fetchingFriends,
            friendsFetched: state.friendsReducer.friendsFetched,
            savingFriends: state.friendsReducer.savingFriends,
            friendsSaved: state.friendsReducer.friendsSaved,
            deletingFriend: state.friendsReducer.deletingFriend,
            friendDeleted: state.friendsReducer.friendDeleted,
            updatingFriend: state.friendsReducer.updatingFriend,
            friendUpdated: state.friendsReducer.friendUpdated,
            error: state.friendsReducer.error
        }
    )
}
export default connect(mapStateToProps)(FriendsList);