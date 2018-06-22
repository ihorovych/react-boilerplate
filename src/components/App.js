import React, { Fragment } from 'react';

export default function App(props) {
  console.log('APP_PROPS', props);
  return (
    <Fragment>
      <div>Hello Docker</div>
      {/* <input
        type="button"
        onClick={
          () => {
            props.someAction();
          }
        }
      /> */}
    </Fragment>
  );
}
