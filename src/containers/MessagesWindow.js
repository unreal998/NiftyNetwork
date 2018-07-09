import { connect } from 'react-redux';

import MessagesWindow from '../components/MessagesWindow/MessagesWindow';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesWindow);
