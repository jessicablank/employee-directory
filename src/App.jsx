import React from "react";
import Header from './components/Header';
import EmployeeTable from './components/EmployeeTable';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
  return (
    <div className="container">
    <Header />
    <EmployeeTable />
    <LoadingIndicator/>
    </div>
  );
}
 

export default App;