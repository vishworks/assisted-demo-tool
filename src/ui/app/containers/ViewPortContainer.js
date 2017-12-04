import { connect } from 'react-redux';

import { getAllUrls, getCurrentUrl } from 'state/demos/selectors.js';

import ViewPort from '../components/ViewPort.js';

const mapStateToProps = state => {
  return {
    urls: getAllUrls(state),
    currentUrl: getCurrentUrl(state)
  };
};

const ViewPortContainer = connect(mapStateToProps, null)(ViewPort);

export default ViewPortContainer;
