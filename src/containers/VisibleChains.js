import { connect } from 'react-redux';
import Chains from '../components/Chains';
import { deleteActorFromChain, deleteChain } from '../actions';


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
  onDeleteChainClick: (chainId) => {
    console.log(chainId);
    dispatch(deleteChain(chainId));
  },
});

const VisibleChains = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chains);

export default VisibleChains;
