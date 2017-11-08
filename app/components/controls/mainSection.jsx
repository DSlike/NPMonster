import React from 'react';

export default class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let content = (
      <div className='project-info'>
        <h1>Project Name</h1>
        <label className='version'>1.0.0</label>
        <label className='author'>Somehow</label>
      </div>
    );
    if (!this.props.projectPath) {
      content = (
        <div className='empty-content-wrapper'>
          <label>Please, choose or add some project</label>
        </div>
      );
    }
    return (
      <section id='projectPage' className={this.props.projectPath ? '' : 'transparent'}>
        {content}
      </section>
    );
  }
}
