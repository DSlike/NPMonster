import React from 'react';

import Nav from './controls/navBar';
import MainSection from './controls/mainSection';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  openProject(e, p, i) {
    console.log(e);
    console.log(p);
    console.log(i);
  }
  render() {
    return (
      <section id='application'>
        <Nav openProject={(e, p, i)=>this.openProject(e, p, i)} />
        <MainSection />
      </section>
    );
  }
}
