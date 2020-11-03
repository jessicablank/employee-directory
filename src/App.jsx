import React from "react";
import Header from './components/Header';

import LoadingIndicator from './components/LoadingIndicator';
import Directory from './components/Directory'

function App() {
  return (
    <div className="container">
    <Header />
    <Directory />
    <LoadingIndicator/>
    </div>
  );
}
 

export default App;