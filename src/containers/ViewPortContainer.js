import { connect } from 'react-redux'

import { getUrls, getCurrentUrl } from '../selectors'


import ViewPort from '../components/ViewPort.js'




const mapStateToProps = state => {
  return {
    urls: getUrls(state),
    currentUrl: getCurrentUrl(state)
  }
};



const ViewPortContainer = connect(
  mapStateToProps,
  null
)(ViewPort);

export default ViewPortContainer