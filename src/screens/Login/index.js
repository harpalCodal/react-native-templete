import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authWatcher} from 'src/store/actions';
import Login from './Login.Component';

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({authWatcher}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
