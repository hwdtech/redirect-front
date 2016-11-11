import React from 'react'
import { Button } from 'react-bootstrap';
import { addMainLink, editMainLink, changeInputMode, setVisibleContent, selectMainLink } from '../actions'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'
import * as utils from '../utils'


const MainLinkForm = ({ dispatch, viewContent, selected, inputMode, formContent }) => {
  let title 
  let defaultLink

  return (
    <div style = {utils.isVisible(viewContent, CONSTANTS.MAIN_LINK_FORM ) ? styles.defaultStyles : styles.hidenStyles}>
      <h4>AddMainLink</h4>
      <form onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim()) {
          return
        }
        if (inputMode === 'ADD') {
          dispatch(addMainLink(title.value, defaultLink.value))
        } else {
          dispatch(editMainLink(selected.mainLink, title.value, defaultLink.value))
          dispatch(changeInputMode())
          dispatch(setVisibleContent([CONSTANTS.MAIN_LINK_LIST]))
          dispatch(selectMainLink(false))

        }
        title.value = ''
        defaultLink.value = ''
      }}>

        <input ref={node => {
          title = node
        }} />

        <input ref={node => {
          defaultLink = node
        }} />

        <Button type="submit" bsStyle="primary">
          addMainLink
        </Button>
      </form>
    </div>
  )
}

export default MainLinkForm