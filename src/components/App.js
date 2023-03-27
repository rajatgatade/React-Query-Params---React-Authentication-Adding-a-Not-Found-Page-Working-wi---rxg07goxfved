import React from 'react'
import '../styles/App.css';

const App = () => {
  //Write your code here

  const queryParams=new URLSearchParams(window.location.search);
  const empId=queryParams.get('id');
  const empName=queryParams.get('name');
  const epmDesignation=queryParams.get('designation');

  return (
    <div className='details'>
           Employee {empId} named {empName} works as {epmDesignation}
    </div>
  )
}

export default App;
