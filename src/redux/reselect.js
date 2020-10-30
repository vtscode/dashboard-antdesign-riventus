import { createSelector } from 'reselect';

const authSelector = state => state.auth;

export const getMemoState = createSelector(
  authSelector,
  auth => auth.user
);