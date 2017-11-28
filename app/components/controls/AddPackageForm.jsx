import React from 'react';

export default class AddPackageForm extends React.Component {
  constructor(props) {
    super(props);
  }
  installDependency() {
    let name = document.getElementsByClassName('package-name')[0].value;
    let dev = document.getElementsByClassName('dev-dependency')[0].checked;
    this.props.updateMessage(`Installing ${name}`, true);
    core.installDependency(name, dev, ()=> {
      this.props.updateMessage('', false);
    });
  }
  render() {
    return (
      <div id='addPackageForm' className={this.props.show}>
        <div className='controls-wrapper'>
          <input type='text'
            placeholder='Dependency Name'
            className='package-name' />
          <input type='checkbox'
            className='dev-dependency'
            name='devDependency'
            id='devDependency' />
          <label htmlFor='devDependency'>Dev Dependency</label>
          <button onClick={()=> {
              this.installDependency();
              this.props.closeForm();
            }}>Add</button>
        </div>
      </div>
    );
  }
}
