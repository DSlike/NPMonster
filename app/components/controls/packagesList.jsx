import React from 'react';

export default class PackagesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let packages = '';
    if (this.props.project) {
      let d = this.props.project;
      packages = Object.keys(d.dependencies).map((e, i) => {
        return (
          <div className='dependency' key={i}>
            <label className='name'>{e}</label>
            <label className='version'>{d.dependencies[e]}</label>
          </div>
        );
      });
    }
    console.log(packages);
    return (
      <section id='packagesList'>
        {packages}
      </section>
    );
  }
}
