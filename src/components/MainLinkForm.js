import React from 'react'
import { Button } from 'react-bootstrap';
import { addMainLink } from '../actions'
import * as CONSTANTS from './CONSTANTS'
import * as styles from '../styles'


const MainLinkForm = ({ dispatch, viewContent }) => {
  let title
  let defaultLink

  return (
    <div style = {(viewContent === CONSTANTS.VIEW_MAIN_LINK_FORM ) ? styles.defaultStyles : styles.hidenStyles}>
      <h4>AddMainLink</h4>
      <form onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim()) {
          return
        }
        dispatch(addMainLink(title.value, defaultLink.value))
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