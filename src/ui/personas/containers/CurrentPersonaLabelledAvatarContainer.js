import { connect } from 'react-redux';

import {
  getCurrentPersonaImageUrl,
  getCurrentPersonaLabel,
  getCurrentPersonaDescription
} from 'state/personas/selectors.js';

import LabelledAvatar from '../components/LabelledAvatar.js';

const mapStateToProps = state => {
  return {
    imageUrl: getCurrentPersonaImageUrl(state),
    label: getCurrentPersonaLabel(state),
    description: getCurrentPersonaDescription(state)
  };
};

const CurrentPersonaLabelledAvatarContainer = connect(mapStateToProps, null)(
  LabelledAvatar
);

export default CurrentPersonaLabelledAvatarContainer;
