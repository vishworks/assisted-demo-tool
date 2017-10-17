import { connect } from 'react-redux'

import { getActivePopup } from '../selectors'

import { openPopup } from '../actions'

import SidePopup from '../components/SidePopup.js'



const mapStateToProps = (state, ownProps) => {
  return {
    activePopup: getActivePopup(state),
    popupId: ownProps.popupId,
    className: ownProps.className,
    closeOnClick: ownProps.closeOnClick
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openPopup: (popupId) => {
      dispatch(openPopup(popupId));
    }
  }
};

const PopupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePopup);

export default PopupContainer