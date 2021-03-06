import React from 'react';
import Header from '../components/Header';
import AddMainLink from '../containers/AddMainLink';
import LeftMenu from '../containers/LeftMenu';
import Errors from '../containers/Errors';


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
        </div>
      </div>
    </div>
  </div>
);

export default App;
