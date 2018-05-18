import { createSelector } from 'reselect';

export const getUiState = state => state.ui;

export const getActivePopup = createSelector(
  [getUiState],
  uiState => uiState.activePopup
);

export const getDisplayMode = createSelector(
  [getUiState],
  uiState => uiState.displayMode
);

export const getDisplayPresenterContent = createSelector(
  [getUiState],
  uiState => uiState.displayPresenterContent
);

export const getGlobalErrorMessage = createSelector(
  [getUiState],
  uiState => uiState.globalErrorMessage
);
