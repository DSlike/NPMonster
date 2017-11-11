import React from 'react';

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
    return (
      <section id='application'>
        <Nav openProject={(e, p, i)=>this.openProject(e, p, i)} />
        <MainSection project={this.state.project} />
      </section>
    );
  }
}
