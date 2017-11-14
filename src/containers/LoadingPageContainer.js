import { connect } from 'react-redux'
import { getGlobalErrorMessage } from '../state/ui/selectors.js'
import LoadingPage from '../components/LoadingPage.js'


const mapStateToProps = state => {
  return {
    errorMessage: getGlobalErrorMessage(state)
  }
};


const LoadingPageContainer = connect(
  mapStateToProps,
  null
)(LoadingPage);

export default LoadingPageContainer