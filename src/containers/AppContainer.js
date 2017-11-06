import { connect } from 'react-redux'
import { asyncLoadConfig } from '../actions'
import { setGlobalError } from '../state/ui/actions.js'
import { getDisplayMode } from '../state/ui/localSelectors.js'
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
      dispatch(setGlobalError(message));
    }
  }
};


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer