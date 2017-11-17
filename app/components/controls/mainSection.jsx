import React from 'react';
import PackagesList from './PackagesList';

export default class MainSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let content;
    if (this.props.project) {
      let p = this.props.project;
      content = (
        <div>
          <div className='project-info'>
            <h1>{p.name}</h1>
            <label className='version'>{p.version}</label>
            <label className='author'>{p.author}</label>
            <div className='edit'>Edit <label>package.json</label></div>
          </div>
          <PackagesList project={this.props.project} />
        </div>
      );
    } else {
      content = (
        <div className='empty-content-wrapper'>
          <label>Please, choose or add some project.
            <small>in the left side of app</small>
          </label>
        </div>
      );
    }
    return (
      <main id='projectPage' className={this.props.project ? '' : 'transparent'}>
        {content}
      </main>
    );
  }
}
