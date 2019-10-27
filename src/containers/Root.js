import { connect } from 'react-redux';
import Root from '../components/Root';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
