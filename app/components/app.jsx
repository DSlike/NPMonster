import React from 'react';
import { BrowserRouter, Router, Route, IndexRoute, Switch, Link } from 'react-router-dom';

import Nav from './controls/navBar';
import MainSection from './controls/mainSection';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: ''};
  }
  openProject(e, p, i) {
    loadPackage(p, (data) => {
      this.setState({'project': data});
    });
  }
  render() {
    console.log(window.location.href);
    return (
      <section id='application'>
        <Nav openProject={(e, p, i)=>this.openProject(e, p, i)} />
        <Switch>
            <Route path='' render = {(props)=>(
              <MainSection project={this.state.project} />
            )}/>
            <Route path='/test' component={Nav}/>
        </Switch>
      </section>
    );
  }
}


// <MainSection project={this.state.project} />
