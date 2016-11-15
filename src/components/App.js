import React from 'react'
import {appStyles, mainStyles} from '../styles'
import Header from './Header'
import Footer from './Footer'
import AddMainLink from '../containers/AddMainLink'
import AddSubLink from '../containers/AddSubLink'
import VisibleMainLinkList from '../containers/VisibleMainLinkList'
import LeftMenu from '../containers/LeftMenu'


const App = () => (
	<div id="App" style={appStyles}>
		<Header />

		<div className="well" style={mainStyles}>
			<AddMainLink />
			<VisibleMainLinkList />
			<AddSubLink />
		</div>

		<LeftMenu />  

		<Footer />
	</div>
)

export default App
