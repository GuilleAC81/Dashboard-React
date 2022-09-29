import React, {Fragment} from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';
import SidebarRouter from '../router/SidebarRouter';

function App() {
  return (
    <Fragment>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar/>
            <SidebarRouter/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
