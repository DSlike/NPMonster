import React from 'react';

export default class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
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
    console.log(this.state);
  }
  render() {
    return (<nav>
      <input type='file'
        id='openProject'
        name='openProject'
        onChange={(е) => this.openProject(е)}
        className='open-project'
        ref='x'/>
      <label htmlFor='openProject'>+ Add project</label>
    </nav>);
  }
}
