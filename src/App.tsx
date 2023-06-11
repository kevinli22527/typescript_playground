import React from 'react';
import TimeDisplay from './components/TimeDisplay';
import NumberCounter from './components/numberCounter';
import NumberAdder from './components/numberAdder';
import BasicButtons from './components/buttons';

const App: React.FC = () => {
  return (
    <div>
      <TimeDisplay />
      <NumberCounter />
      <NumberAdder />
      <BasicButtons />
    </div>
  );
};

export default App;
