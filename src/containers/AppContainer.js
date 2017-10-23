import { connect } from 'react-redux'
import { asyncLoadConfig, setConfigError } from '../actions'
import { getDisplayMode } from '../selectors'
import { getPersonas } from '../state/personas/localSelectors.js'
import App from '../App.js'



const mapStateToProps = state => {
  return {
    displayMode: getDisplayMode(state),
    configLoaded: !!getPersonas(state) // FIXME create speaking selector
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadConfig: (configUrl) => { // FIXME remove
      dispatch(asyncLoadConfig(configUrl));
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