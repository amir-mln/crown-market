import {createSelector} from 'reselect';

const getUser= (state)=> state.user;

const currentUserSelector = createSelector(
    [getUser],
    (user)=> user.currentUser
)
export {currentUserSelector}