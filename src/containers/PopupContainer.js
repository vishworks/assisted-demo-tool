import { connect } from 'react-redux'

import { getActivePopup } from '../selectors'

import { closeAllPopups } from '../actions'

import Popup from '../components/Popup.js'



const mapStateToProps = (state, ownProps) => {
  return {
    activePopup: getActivePopup(state),
    popupId: ownProps.popupId,
    className: ownProps.className,
    closeOnClick: ownProps.closeOnClick,
    onOpen: ownProps.onOpen,
    onClose: ownProps.onClose
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeAllPopups: () => {
      dispatch(closeAllPopups());
    }
  }
};

const PopupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);

export default PopupContainer