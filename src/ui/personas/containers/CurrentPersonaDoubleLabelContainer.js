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

const mapDispatchToProps = () => ({});

const CurrentPersonaDoubleLabelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoubleLabel);

export default CurrentPersonaDoubleLabelContainer;
