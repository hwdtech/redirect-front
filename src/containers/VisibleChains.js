import { connect } from 'react-redux';
import Chains from '../components/Chains';
import { deleteActorFromChain } from '../actions';


const mapStateToProps = (state) => {
  console.log(state.chains);
  return {
    chains: state.chains,
    actors: state.actors,
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    cosole.log('click!');
  },
  onDeleteStepClick: (chainId, stepId) => {
    console.log(chainId, stepId);
    dispatch(deleteActorFromChain(chainId, stepId));
  },
});

const VisibleChains = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chains);

export default VisibleChains;
