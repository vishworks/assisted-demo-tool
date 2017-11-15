import { connect } from 'react-redux';

import {
  getCurrentPersonaLabel,
  getCurrentPersonaDescription
} from 'state/personas/selectors.js';

import DoubleLabel from 'ui/shared/components/DoubleLabel.js';

const mapStateToProps = state => {
  return {
    label: getCurrentPersonaLabel(state),
    description: getCurrentPersonaDescription(state)
  };
};

const CurrentPersonaDoubleLabelContainer = connect(mapStateToProps, null)(
  DoubleLabel
);

export default CurrentPersonaDoubleLabelContainer;
