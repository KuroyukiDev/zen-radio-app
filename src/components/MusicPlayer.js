import React, {Component} from 'react';
import ReactAplayer from 'react-aplayer';
import {NavLink} from "react-router-dom";

class MusicPlayer extends Component {
  // event binding example
  onPlay = () => {
    // console.log('on play');
    this.ap.play();
  };
  
  onPause = () => {
    // console.log('on pause');
    this.ap.pause();
  };
  onEnded = () => {
    // this.ap.skipForward();
  };

// example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
    this.ap.setMode('normal');
  };
  
  render() {
    const { data, navClicked } = this.props;
    if (navClicked) {
      this.ap.pause();
    }
    return (
      <div>
        <ReactAplayer
          {...data}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onEnded={this.onEnded}
        />
        {/* example of access aplayer instance API */}
        {/*<button onClick={() => this.ap.toggle()}>toggle</button>*/}
  
  
        <nav className="container" style={{marginTop: 25, marginBottom: 20}}>
    
          <NavLink style={{color: 'mediumvioletred', textDecoration: 'none'}} className="text-center" exact={true} to="/"
                   activeClassName="is-active">
            <div onClick={() => this.ap.pause()} style={{borderTop: '1px solid mediumvioletred', borderBottom: '1px solid mediumvioletred', backgroundColor: 'black' }}
                 className="row">
              <h3 style={{height: 45}}>
                Radio List
              </h3>
            </div>
          </NavLink>
  
        </nav>
      </div>
    );
  }
}

export default MusicPlayer;