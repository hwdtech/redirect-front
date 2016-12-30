import { connect } from 'react-redux';
import Chains from '../components/Chains';


const mapStateToProps = (state) => {
  console.log(state.chains.maps);
  return {
    chains: state.chains.maps,
    actors: state.actors,
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
