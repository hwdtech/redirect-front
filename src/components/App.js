import React from 'react'
import AddMainLink from '../containers/AddMainLink'
import AddSubLink from '../containers/AddSubLink'
import VisibleMainLinkList from '../containers/VisibleMainLinkList'
import Header from './Header'
import LeftMenu from './LeftMenu'


const mainStyles = {
  maxWidth: 800, 
  minWidth: 0,
  height: '100%',
  right: 0,
  backgroundColor: '#eeeeee',
  position: 'fixed'
};

const App = () => (
  	<div>
    	<Header />
  		
  		<div className="main" style={mainStyles}>

  			<h3>Main</h3>
	  		<AddMainLink />
        <AddSubLink />

        <h3>Main Links</h3>
	  		<VisibleMainLinkList />

        <h3>Sub Links</h3>
        <p>soon</p>

  		</div>
      <LeftMenu />  
  		<div>
  			footer
  		</div>
  	</div>
)

export default App
