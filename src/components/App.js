import React from 'react'
import * as styles from '../styles'
import Header from './Header'
import Footer from './Footer'
import AddMainLink from '../containers/AddMainLink'
import AddSubLink from '../containers/AddSubLink'
import VisibleMainLinkList from '../containers/VisibleMainLinkList'

import LeftMenu from './LeftMenu'


const App = () => (
  	<div id="App" style={styles.appStyles}>
    	<Header />
  		
  		<div className="main" style={styles.mainStyles}>
	  		<AddMainLink />
	  		<VisibleMainLinkList />
        <AddSubLink />
  		</div>

      <LeftMenu />  
      
  		<Footer />
  	</div>
)

export default App
