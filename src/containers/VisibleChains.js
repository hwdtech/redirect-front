import { connect } from 'react-redux';
import Chains from '../components/Chains';


const mapStateToProps = (state) => {
  console.log(state.chains.maps);
  return {
    chains: state.chains.maps,
  };
};

const mapDispatchToProps = () => ({
  onClick: () => {
    cosole.log('click!');
  },
});

const VisibleChains = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chains);

export default VisibleChains;
