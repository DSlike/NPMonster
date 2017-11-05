import React from 'react';

import Nav from './controls/navBar';
import MainSection from './controls/mainSection';
import Header from './controls/header';
// import Footer from './components/footer';
// import Background from './components/background';
// import StopPreloader from './components/stop-preloader';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="application">
        <Header />
        <Nav />
        <MainSection />
      </section>
    );
  }
}
