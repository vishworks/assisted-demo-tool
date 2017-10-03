import { connect } from 'react-redux'
import { asyncLoadConfig } from '../actions'
import { getPersonas } from '../selectors'
import App from '../App.js'



const mapStateToProps = state => {
  return {
    configLoaded: !!getPersonas(state) // FIXME create speaking selector
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadConfig: () => {
      dispatch(asyncLoadConfig());
    }
  }
};


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer