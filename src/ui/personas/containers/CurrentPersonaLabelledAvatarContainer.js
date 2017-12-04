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

const mapDispatchToProps = () => ({});

const CurrentPersonaLabelledAvatarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelledAvatar);

export default CurrentPersonaLabelledAvatarContainer;
