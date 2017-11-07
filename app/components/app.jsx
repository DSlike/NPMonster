import React from 'react';

import Nav from './controls/navBar';
import MainSection from './controls/mainSection';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id='application'>
        <Nav />
        <MainSection />
      </section>
    );
  }
}
