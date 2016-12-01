import React from 'react'
import {appStyles, mainStyles} from '../styles'
import Header from './Header'
import Footer from './Footer'
import AddMainLink from '../containers/AddMainLink'
import AddSubLink from '../containers/AddSubLink'
import VisibleMainLinkList from '../containers/VisibleMainLinkList'
import LeftMenu from '../containers/LeftMenu'
import Errors from '../containers/Errors'


const App = () => (
	<div>
		<Header />

		<div className="container-fluid">
			<div className="row">

				<div className="col-sm-3 col-md-2 sidebar">
					<LeftMenu />
				</div>

				<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
					<Errors />
					<AddMainLink />
					<AddSubLink />			
					<VisibleMainLinkList />
				</div>
			</div>
		</div>
	</div>
)

export default App
