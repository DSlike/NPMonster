import React from 'react';

import AddPackageForm from './addPackageForm';

export default class PackagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showAdding: false};
  }
  showAddingForm() {
    this.setState({showAdding: !this.state.showAdding});
  }
  deleteDependency(name) {
    this.props.updateMessage(`Removing ${name}`, true);
    core.deleteDependency(name, ()=> {
      this.props.updateMessage(name, false);
    });
  }
  render() {
    let packages = '';
    let devPackages = '';
    if (this.props.project) {
      let d = this.props.project;
      if (d.dependencies)
        packages = Object.keys(d.dependencies).map((e, i) => {
          return (
            <div className='dependency' key={i}>
              <label className='name'>{e}</label>
              <label className='version'>{d.dependencies[e]}</label>
              <button className='delete'
                onClick={()=> {
                  this.deleteDependency(e);
                }}
                ></button>
            </div>
          );
        });
      if (d.devDependencies)
      devPackages = Object.keys(d.devDependencies).map((e, i) => {
        return (
          <div className='dependency dev' key={i}>
            <label className='name'>{e}</label>
            <label className='version'>{d.devDependencies[e]}</label>
            <button className='delete'
              onClick={()=> {
                this.deleteDependency(e);
              }}></button>
          </div>
        );
      });
    }
    return (
      <section id='packagesList'>
        <AddPackageForm
          updateMessage = {this.props.updateMessage}
          show={
            this.state.showAdding == true ? '' : 'hidden'
          } />
        <div className='add-package'
          onClick={()=>this.showAddingForm()}>+ Add package</div>
        {packages}
        {devPackages}
      </section>
    );
  }
}
