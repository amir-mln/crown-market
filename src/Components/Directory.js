import React from 'react'
import {connect} from 'react-redux'
import {directorySectionSelector} from '../redux/Selectors/directory-selector'
import MenuItem from './MenuItem'
import './Directory.scss'

const Directory= ({sections})=> (
    <div className="directory-menu">
        {sections.map( (section)=> <MenuItem key={section.id} {...section} />)}
    </div>    
)

const mapStateToProps=(state)=>({
    sections: directorySectionSelector(state)
})
export default connect(mapStateToProps)(Directory);