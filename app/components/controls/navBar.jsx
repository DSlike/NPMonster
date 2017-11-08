import React from 'react';

export default class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {path: '', name: 'testProject'},
        {path: '', name: 'testProjectWithReallyVeryLongName'},
        {path: '', name: 'test Project With Really Very Long Name'},
      ]
    };
  }

  componentDidMount() {
    if (this.refs.x) {
      this.refs.x.directory = true;
      this.refs.x.webkitdirectory = true;
    }
  }

  componentDidUpdate() {
    if (this.refs.x) {
      this.refs.x.directory = true;
      this.refs.x.webkitdirectory = true;
    }
  }

  openProject(e) {
    const project = e.target.files[0];
    var a = this.state.projects;
    a.push({path: project.path, name: project.name});
    this.setState({projects: a});
  }
  render() {
    const projectsList = this.state.projects.map((el,i)=> {
      return (
        <div className='project-link'
          onClick={(e)=>this.props.openProject(e, el)}
          key={i}>{el.name}</div>
      );
    });
    return (<nav>
      <input type='file'
        id='openProject'
        name='openProject'
        onChange={(е) => this.openProject(е)}
        className='open-project'
        ref='x'/>
      <label htmlFor='openProject'>+ Add project</label>
      {projectsList}
    </nav>);
  }
}
