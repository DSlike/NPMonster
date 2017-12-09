import React from 'react';
import { Link } from 'react-router-dom';

export default class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: (localStorage.projects ?
                  JSON.parse(localStorage.projects) :
                  []),
      active: -1
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
  changeActive(i) {
    this.setState({'active': i});
  }
  removeProject(e, el){
    e.preventDefault();
    e.stopPropagation();
    let projects = JSON.parse(localStorage.projects);
    projects.map((e,i)=>{
      if(e.name == el.name && e.path == el.path)
        projects.splice(i, 1);
    });
    localStorage.projects = JSON.stringify(projects);
    this.setState({projects: projects});
  }

  addProject(e) {
    const project = e.target.files[0];
    var a = this.state.projects;
    a.push({path: project.path, name: project.name});
    localStorage.projects = JSON.stringify(a);
    this.setState({projects: a});
  }
  render() {
    console.log(this.state.projects);
    const projectsList = this.state.projects.map((el,i)=> {
      return (
        <div className={(this.state.active == i ? 'active ' : '') + 'project-link'}
          onClick={(e)=> {
            this.props.openProject(e, el, i);
            this.changeActive(i);
          }}
          key={i}>
          {el.name}
          <div
            onClick={(e)=>this.removeProject(e, el)}
            className="remove">
          </div>
        </div>
      );
    });
    return (<nav>
      <div className='open-form-wrapper'>
        <input type='file'
          id='addProject'
          name='addProject'
          onChange={(е) => this.addProject(е)}
          className='open-project'
          ref='x'/>
        <label htmlFor='addProject'>+ Add project</label>
      </div>
      <Link to='/test'>Test</Link>
      {projectsList}
    </nav>);
  }
}
