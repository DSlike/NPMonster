import React from 'react';

import AddPackageForm from './addPackageForm';

export default class PackagesList extends React.Component {
  constructor(props) {
    super(props);
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
                onClick={()=>core.deleteDependency(e, 'main')}></button>
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
              onClick={()=>core.deleteDependency(e, 'dev')}></button>
          </div>
        );
      });
    }
    return (
      <section id='packagesList'>
        <AddPackageForm show='hide' />
        <div className='add-package'>+ Add package</div>
        {packages}
        {devPackages}
      </section>
    );
  }
}
