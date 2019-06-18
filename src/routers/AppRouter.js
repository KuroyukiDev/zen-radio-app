import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RadioSelectListPage from '../components/RadioSelectListPage';
import JrapRadioPage from '../components/JrapRadioPage';
// import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-bg">
      <Switch>
        <Route path="/" component={RadioSelectListPage} exact={true}/>
        <Route path="/jrap" component={JrapRadioPage}/>
        {/*<Route component={NotFoundPage}/>*/}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;