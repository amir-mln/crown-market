import {createSelector} from 'reselect'

const getDirectory= state=> state.directory;

const directorySectionSelector= createSelector(
    [getDirectory],
    (directory)=> directory.sections
)

export {directorySectionSelector}