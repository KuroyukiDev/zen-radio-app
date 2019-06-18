import React from 'react';
import {NavLink} from "react-router-dom";
import Header from "./Header";

const RadioSelectListPage = () => {
  
  return (
    <div className="container">
      <Header title="Radio List"/>
      <div className="row">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-around',  justifyContent: 'center' }} className="visible-xs-12 hidden-sm hidden-md hidden-lg hidden-xl">
          <NavLink style={{ color: 'mediumvioletred', borderTop: '1px solid mediumvioletred', borderBottom: '1px solid mediumvioletred', textDecoration: 'none' }} className="text-center" to="/jrap" activeClassName="is-active">
            <div style={{backgroundColor: 'black'}} className="row">
              <h3 style={{height: 45}}>
                J-Rap Music
              </h3>
            </div>
          </NavLink>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }} className="hidden-xs">
          <div style={{justifyContent: 'space-around'}}>
            <NavLink style={{ textDecoration: 'none' }} className="col-md-2 col-sm-2" exact={true} to="/" activeClassName="is-active">
              <h4 className="text-center">
                Radio List
              </h4>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} className="col-md-2 col-sm-2" to="/jrap" activeClassName="is-active">
              <h4 className="text-center">
                J-Rap Music
              </h4>
            </NavLink>
          </div>
          <div className="col-md-8 col-sm-9"></div>
        </div>
      </div>
    </div>
  );
};

export default RadioSelectListPage;