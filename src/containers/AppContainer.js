import { connect } from 'react-redux'
import { asyncLoadConfig, updateStateFromHash } from '../actions'
import { getPersonas } from '../selectors'
import App from '../App.js'



const mapStateToProps = state => {
  return {
    configLoaded: !!getPersonas(state) // FIXME create speaking selector
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadConfig: (urlHash) => { // FIXME remove
      dispatch(asyncLoadConfig(urlHash));
    },
    updateStateFromHash: (urlHash) => {
      dispatch(updateStateFromHash(urlHash));
    }
  }
};


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer