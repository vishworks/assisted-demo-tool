import { connect } from 'react-redux'
import { asyncLoadConfig, updateStateFromHash, setConfigError } from '../actions'
import { getPersonas } from '../selectors'
import App from '../App.js'



const mapStateToProps = state => {
  return {
    configLoaded: !!getPersonas(state) // FIXME create speaking selector
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadConfig: (configUrl) => { // FIXME remove
      dispatch(asyncLoadConfig(configUrl));
    },
    updateStateFromHash: (urlHash) => {
      dispatch(updateStateFromHash(urlHash));
    },
    setConfigError: (message) => {
      dispatch(setConfigError(message));
    }
  }
};


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer