import React from 'react';

export default class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="projectPage">
        <div className="project-info">
          <h1>Project Name</h1>
          <label className="version">1.0.0</label>
          <label className="author">Somehow</label>
        </div>
      </section>
    );
  }
}
