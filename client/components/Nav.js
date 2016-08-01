import React from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    if(!this.props.user){
      return (
        <nav className="container-fluid">
          <div className="row text-center navbar">
            <a href="/home"><div className="col-md-2 col-sm-2 navpad">Home</div></a>
            <a href="/search"><div className="col-md-2 col-sm-2 navpad line">Search</div></a>
            <div className="col-md-4 col-sm-4"><img className="center-block logo" src="imgs/logo2.png" /></div>
            <a href="/#/login"><div className="col-md-2 col-sm-2 navpad line">Login</div></a>
            <a href="/#/signup"><div className="col-md-2 col-sm-2 navpad">Signup</div></a>
          </div>
        </nav>
      )
    }else{
      return (
        <nav className="container-fluid">
          <div className="row text-center navbar">
            <a href="/home"><div className="col-md-2 col-sm-2 navpad">Home</div></a>
            <a href="/search"><div className="col-md-2 col-sm-2 navpad line">Search</div></a>
            <div className="col-md-4 col-sm-4"><img className="center-block logo" src="imgs/logo2.png" /></div>
            <a href="/#/saved"><div className="col-md-2 col-sm-2 navpad line">Saved</div></a>
            <a href="/#/logout"><div className="col-md-2 col-sm-2 navpad">Logout</div></a>
          </div>
        </nav>
      )
    }

  }
};

