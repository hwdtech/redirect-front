import React from 'react'
import AddMainLink from '../containers/AddMainLink'
import VisibleMainLinkList from '../containers/VisibleMainLinkList'
import Header from './Header'
import LeftMenu from './LeftMenu'


const mainStyles = {
  maxWidth: 800, 
  minWidth: 0,
  height: '80%',
  right: 0,
  backgroundColor: '#eeeeee',
  position: 'fixed'
};

const App = () => (
  	<div>
    ---------------------------------------------------------------
  		<Header />
  		
  		<div className="main" style={mainStyles}>
  			main
	  		<AddMainLink />
	  		<VisibleMainLinkList />
  		</div>
      <LeftMenu />  
  		<div>
  			footer
  		</div>
  	</div>
)

export default App
