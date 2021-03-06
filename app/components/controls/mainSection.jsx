import React from 'react';
import PackagesList from './PackagesList';

export default class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showMessage: false, messageText: ''};
  }
  componentWillReceiveProps(nextProps) {
    this.state = nextProps;
  }
  updateMessage(text, show) {
    this.setState({
      showMessage: show,
      messageText: (text ? text : this.state.messageText)
    });
  }
  updateProject() {
    core.getPackageJSON((data)=> {
      this.setState({project: data});
    });
  }
  render() {
    let content;
    const self = this;

    if (this.state.project) {
      let p = this.state.project;
      content = (
        <div>
          <div className='project-info'>
            <h1>{p.name}</h1>
            <label className='version'>{p.version}</label>
            <label className='author'>{p.author}</label>
            <div className='edit'
                  onClick={()=>core.editPackageJSON()}>
              Edit <label>package.json</label>
            </div>
          </div>
          <div className={(p.scripts ? '' : 'hidden ') + 'project-scripts' }>
            <label>Project npm scripts : </label>
            {
              p.scripts ?
                Object.keys(p.scripts).map((e, i)=> {
                  return (
                    <div className='project-script-button'
                          key={e}
                          onClick={()=>core.runScript(p.scripts[e])}
                          >{e}</div>
                  );
                })
              : ' here is no npm scripts.'
            }
          </div>
          <PackagesList
            project={this.state.project}
            updateProject={this.updateProject()}
            updateMessage={(text, show)=> {this.updateMessage(text, show);}}/>
          <div
            className={'message' + (this.state.showMessage ? '' : ' hidden')}>
            {this.state.messageText}
          </div>
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
      <main id='projectPage' className={this.state.project ? '' : 'transparent'}>
        {content}
      </main>
    );
  }
}
