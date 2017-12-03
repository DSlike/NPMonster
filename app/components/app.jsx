import React from 'react';
import { BrowserRouter, Router, Route, IndexRoute, Switch, Link } from 'react-router-dom';

import Nav from './controls/navBar';
import MainSection from './controls/mainSection';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {project: '', path: ''};
    let c = new CORE();
    c.checkVersions();
  }
  openProject(e, p, i) {
    coreInit(p);
    core.getPackageJSON((data) => {
      if (data != 'no package')
        this.setState({'project': data});
    });
  }
  render() {
    const theme = localStorage.theme == 'dark' ? 'dark' : 'light';
    return (
      <section id='application' className={theme}>
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
