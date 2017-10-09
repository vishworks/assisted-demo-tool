import { connect } from 'react-redux'
import { getConfigErrorMessage } from '../selectors'
import LoadingPage from '../components/LoadingPage.js'


const mapStateToProps = state => {
  return {
    errorMessage: getConfigErrorMessage(state)
  }
};


const LoadingPageContainer = connect(
  mapStateToProps,
  null
)(LoadingPage);

export default LoadingPageContainer