import React from 'react';
import ChildComponent2 from './03/ChildComponent2';

class App extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent2 objvalue={{ age: '20살' }} />
      </div>
    );
  }
}

export default App;
