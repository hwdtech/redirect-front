import { connect } from 'react-redux';
import ErrorBlock from '../components/ErrorBlock';


const mapStateToProps = state => ({
  viewContent: state.viewContent,
  errors: state.errors,
});

const Errors = connect(
  mapStateToProps,
)(ErrorBlock);

export default Errors;
