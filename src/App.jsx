import React from "react";
import Header from './components/Header';

import LoadingIndicator from './components/LoadingIndicator';
import DataSort from './components/DataSort'

function App() {
  return (
    <div className="container md-12 sm-12">
    <Header />
    <DataSort />
    <LoadingIndicator/>
    </div>
  );
}
 

export default App;