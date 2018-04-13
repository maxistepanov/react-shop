import { createSelector } from 'reselect'


export const selectAppDomain= (state) => state.root.app;


export const selectDataMessage= createSelector(
  selectAppDomain,
  (subState) => subState.data
);