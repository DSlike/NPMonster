import React from 'react';

import Nav from './controls/navBar';
import MainSection from './controls/mainSection';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  openProject(e, p) {
    console.log(e);
    console.log(p);
  }
  render() {
    return (
      <section id='application'>
        <Nav openProject={(e, p)=>this.openProject(e, p)} />
        <MainSection />
      </section>
    );
  }
}
