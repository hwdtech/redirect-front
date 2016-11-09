import React from 'react'
import * as styles from '../styles'
import AddMainLink from '../containers/AddMainLink'
import AddSubLink from '../containers/AddSubLink'
import VisibleMainLinkList from '../containers/VisibleMainLinkList'
import Header from './Header'
import LeftMenu from './LeftMenu'


const App = () => (
  	<div>
    	<Header />
  		
  		<div className="main" style={styles.mainStyles}>
	  		<AddMainLink />
	  		<VisibleMainLinkList />
        <AddSubLink />
  		</div>
      <LeftMenu />  
  		<div>footer</div>
  	</div>
)

export default App
