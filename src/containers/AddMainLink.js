import React from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { addMainLink } from '../actions'



let AddMainLink = ({ dispatch }) => {
  let title
  let defaultLink

  return (
    <div>
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
AddMainLink = connect()(AddMainLink)

export default AddMainLink