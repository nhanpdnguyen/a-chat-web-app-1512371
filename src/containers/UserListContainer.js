import UserList from '../components/UserList'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    myFirebase: state.firebase,
    users: state.firebase.ordered.users,
    onlineUsers: state.firebase.data.onlineUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(['users', 'onlineUsers'])
)(UserList);




