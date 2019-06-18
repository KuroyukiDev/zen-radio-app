import React from 'react';
import {NavLink} from "react-router-dom";
import data from '../shared/data';
import Header from "./Header";
import MusicPlayer from "./MusicPlayer";

const JrapRadioPage = () => {
  const jrapDataList = data.apJrapList;
  let isNavClicked = false;
  return (
    <div>
      <Header title="J-Rap Music"/>
      <MusicPlayer data={jrapDataList}/>
      
    </div>
  );
};

export default JrapRadioPage;