import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import VisibleSubLinkList from '../containers/VisibleSubLinkList';


const MainLink = ({ onClick, onDeleteClick, onEditClick, id, title, defaultLink, selected }) => (
  <li
    style={{
      color: (selected.mainLink === id) ? 'red' : 'black',
    }}
  >
    <h4>{title}</h4>
    <p> Default link: {defaultLink} </p>

    <Button onClick={onClick}> SubLinks</Button>
    <Button onClick={() => onDeleteClick(id)}> Delete</Button>
    <Button onClick={() => onEditClick(id, selected.mainLink, title, defaultLink)}> Edit</Button>

    <VisibleSubLinkList mainId={id} />
  </li>
);

MainLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  defaultLink: PropTypes.string.isRequired,
  selected: PropTypes.shape({
    mainLink: PropTypes.number.isRequired,
    subLink: PropTypes.number.isRequired,
  }).isRequired,
};

export default MainLink;
