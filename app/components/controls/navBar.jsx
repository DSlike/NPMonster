import React from 'react';

export default class navBar extends React.Component {
  constructor(props) {
    super(props);
  }
  openProject(e) {
    console.log(e);
  }
  render() {
    return (
      <nav>
        <input type='file'
          id='openProject'
          name='openProject'
          onChange={(e) => this.openProject(e)}
          className='open-project' />
        <label htmlFor='openProject'>+ Add project</label>
      </nav>
    );
  }
}
