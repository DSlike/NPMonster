import React from 'react';

export default class AddPackageForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='addPackageForm' className={this.props.show}>
        <div className='controls-wrapper'>
          <input type='text' className='package-name' />
          <input type='checkbox'
            className='dev-dependency'
            name='devDependency'
            id='devDependency' />
          <label htmlFor='devDependency'></label>
          <button>Add</button>
        </div>
      </div>
    );
  }
}
