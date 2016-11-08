import React from 'react'
import AddMainLink from '../containers/AddMainLink'
import AddSubLink from '../containers/AddSubLink'
import VisibleMainLinkList from '../containers/VisibleMainLinkList'
import VisibleSubLinkList from '../containers/VisibleSubLinkList'
import Header from './Header'
import LeftMenu from './LeftMenu'


const mainStyles = {
  maxWidth: 800, 
  height: '100%',
  right: 0,
  margin: '0 auto 10px',
  padding: '2em',
  backgroundColor: '#eeeeee',
  position: 'fixed'
};

const App = () => (
  	<div>
    	<Header />
  		
  		<div className="main" style={mainStyles}>

  			<h3>Main</h3>
        <h4>AddMainLink</h4>
	  		<AddMainLink />
        <h4>AddSubLink</h4>
        <AddSubLink />

        <h4>Main Links</h4>
	  		<VisibleMainLinkList />

        <h4>Sub Links</h4>
        <VisibleSubLinkList />

  		</div>
      <LeftMenu />  
  		<div>
  			footer
  		</div>
  	</div>
)

export default App
