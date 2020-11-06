import React from "react";
import Header from './components/Header';

import LoadingIndicator from './components/LoadingIndicator';
import DataSort from './components/DataSort'

function App() {
  return (
    <div className="container">
    <Header />
    <DataSort />
    <LoadingIndicator/>
    </div>
  );
}
 

export default App;