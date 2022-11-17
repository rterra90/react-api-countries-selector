import React from 'react';
import Header from './Components/Header';
import './App.css';
import Main from './Components/Main';

function App() {
  const [darkmode, setDarkmode] = React.useState(false);
  return (
    <main darkmode={darkmode ? 'true' : 'false'}>
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      <Main />
    </main>
  );
}

export default App;
