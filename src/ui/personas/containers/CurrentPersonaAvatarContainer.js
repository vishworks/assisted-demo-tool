import { connect } from 'react-redux';

import { getCurrentPersonaImageUrl } from 'state/personas/selectors.js';

import RoundImage from 'ui/shared/components/RoundImage.js';

const mapStateToProps = state => {
  return {
    imageUrl: getCurrentPersonaImageUrl(state)
  };
};

const CurrentPersonaAvatarContainer = connect(mapStateToProps, null)(
  RoundImage
);

export default CurrentPersonaAvatarContainer;
